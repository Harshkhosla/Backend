const mqtt = require("mqtt");

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

    this.mqttClient.on("message", (topic, message) => {
      console.log(topic);
      console.log(message.toString(), "it is here, sir");
      // sendDataToClient(topic)
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
    this.mqttClient.subscribe(topic, options);
  }
}



module.exports = MQTTService;
