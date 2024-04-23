const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "hello-app",
  brokers: ["localhost:9092"],
});

module.exports = kafka;
