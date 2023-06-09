

const mqttService = require("../service/mqttService");

// Change this to point to your MQTT broker
const MQTT_HOST_NAME = "mqtt://34.93.62.206:1883";

var mqttClient = new mqttService(MQTT_HOST_NAME);
mqttClient.connect();


exports.subscriberController = async function (req, res) {
  try {
    const topic = req.body.topic;
    // const message = req.body.message;

    console.log(`Request Topic :: ${topic}`);
    // console.log(`Request Message :: ${message}`);

    // mqttClient.publish(topic, message, {});
    console.log(`Subscribing to Topic: ${topic}`);

    mqttClient.subscribe(topic, { qos: 0 });
    // mqttClient.on("message", function (topic, message) {
    //   console.log(message.toString(),"idid it");
    //   if (this.messageCallback) this.messageCallback(topic, message);
    // })
    res
      .status(200)
      .json({ status: "200", message: "Sucessfully subscribed MQTT Message" });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
