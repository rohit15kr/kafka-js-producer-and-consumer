const { Kafka } = require('kafkajs')
const Chance = require('chance');
const chance = new Chance();
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9093']
})

const producer = kafka.producer()
const consumer = kafka.consumer({groupId:"new-group"})


// function logRandomSentence() {
//     const sentence = chance.sentence({ words: 2 });
//     console.log(sentence);
// }


const run = async () => {
  // Producing
  await producer.connect()
  
  const sentence = chance.sentence({ words: 1 });
    console.log(sentence);
     producer.send({
        topic: 'test-topic',
        messages: [
          { value: toString(sentence) },
        ],
      })

  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic' })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}

run().catch(console.error)