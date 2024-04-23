
const kafka = require("./newProducer")
const producer = kafka.producer();

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: "newtop",
    messages: [{ value: "Hello KafkaJS user!" }],
  });

  // Consuming
  // await consumer.connect();
  // await consumer.subscribe({ topic: "newtop", fromBeginning: true });

  // await consumer.run({
  //   eachMessage: async ({ topic, partition, message }) => {
  //     console.log({
  //       partition,
  //       offset: message.offset,
  //       value: message.value.toString(),
  //     });
  //   },
  // });
};

run().catch(console.error);
