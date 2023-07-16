const mqtt = require("mqtt");
const Events =require('../modules/eventsModel');
// const Events =require('../modules/eventsModel');
const shortId = require('shortid');

const { sendDataToClient } = require('../utils/websocketUtils');
const EventEmitter = require("events");

class MQTTService {
  constructor(host, messageCallback, sample) {
    this.mqttClient = null;
    this.host = host;
    this.messageCallback = messageCallback;
    this.sample = sample;
  }

  connect() {
    this.mqttClient = mqtt.connect(this.host);

    // MQTT Callback for 'error' event
    this.mqttClient.on("error", (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // MQTT Callback for 'connect' event
    this.mqttClient.on("connect", () => {
      console.log(`MQTT client connected`);
    });

    this.mqttClient.on("message", async(topic, message) => {
      console.log(topic);
      console.log(message.toString(), "it is here, sir");
      // sendDataToClient(topic)
      let data = message.toString();
      data = JSON.parse(data);
      data._id = "rvg3sdeeeee28e8c";
      console.log(data);
      await saveData(data,topic);
    });
    this.mqttClient.on("close", () => {
      console.log(`MQTT client disconnected`);
    });
  }


  // Publish MQTT Message
  publish(topic, message, options) {
    this.mqttClient.publish(topic, message);
  }

  // Subscribe to MQTT Message
  subscribe(topic, options) {
    this.mqttClient.subscribe(`${topic}_Notifications`, options);
  }
}


saveData = async (data,topic)  => {
  const eventData = {
    ProductId: topic.replace('_Notifications', ''),
    data: data,
    _id: shortId.generate() // Generate a unique ID using shortid
  };
  const event = new Events(eventData);
  const savedEvent = await event.save();
  console.log('Saved data:', savedEvent);

  // Send live data to applications
  // await sendToApplicaiton(topic_ws_send, data);
}


module.exports = MQTTService;
