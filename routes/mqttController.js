const mqtt = require("mqtt");
const UserSignin = require("../modules/UserSignin");
// const UserSchema = require("./path-to-user-schema"); // Replace with the path to your UserSchema file

const MQTT_HOST_NAME = "mqtt://34.93.62.206:1883";

class MQTTService {
  constructor(host) {
    this.mqttClient = null;
    this.host = host;
  }

  connect() {
    this.mqttClient = mqtt.connect(this.host);

    this.mqttClient.on("error", (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    this.mqttClient.on("connect", () => {
      console.log(`MQTT client connected`);
    });

    this.mqttClient.on("message", (topic, message) => {
      console.log(topic);
      console.log(message.toString(), "Message received");
      this.handleMessage(topic, message);
    });

    this.mqttClient.on("close", () => {
      console.log(`MQTT client disconnected`);
    });
  }

  handleMessage(topic, message) {
    console.log(`Received MQTT message: ${message.toString()} on topic: ${topic}`);

    const userId = extractUserIdFromTopic(topic);
    if (!userId) {
      console.log('Invalid topic format, user ID not found');
      return;
    }

    // Store the message data for the user
    saveDataToUserSchema(userId, message.toString());
  }

  publish(topic, message, options) {
    this.mqttClient.publish(topic, message, options);
  }

  subscribe(topic, options) {
    this.mqttClient.subscribe(topic, options);
  }
}

function extractUserIdFromTopic(topic) {
  const topicParts = topic.split('/');
  const userId = topicParts[1];
  return userId;
}

function saveDataToUserSchema(userId, data) {
  // Replace with your database storage logic using Mongoose or any other database library
  UserSignin.findOneAndUpdate(
    { userId }, // Match the user based on their ID
    { $push: { mqttData: data } }, // Push the data to the user's 'mqttData' array field
    { new: true },
    (err, user) => {
      if (err) {
        console.error(`Error storing MQTT data for user ${userId}:`, err);
      } else {
        console.log(`Data stored for user ${userId}`);
      }
    }
  );
}

const mqttClient = new MQTTService(MQTT_HOST_NAME);
mqttClient.connect();
mqttClient.subscribe('harsh'); // Replace with the actual MQTT topic you want to subscribe to

module.exports = mqttClient;
