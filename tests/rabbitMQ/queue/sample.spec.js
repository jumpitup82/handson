const MessagePublisher = require('../../../lib/rabbitMQ/messaging/queue/message-publisher'),
		MessageConsumer = require('../../../lib/rabbitMQ/messaging/queue/message-consumer'),
		rabbitMqConnection = require('../../../lib/rabbitMQ/messaging/rabbitmq-connection');

describe('rabbitMQ sample', async () => {
	const QUEUE = 'sample';

	it('when sendToQueue, then publish message', () => {
		const messagePublisher = new MessagePublisher(rabbitMqConnection);
		messagePublisher.connect();
		messagePublisher.sendToQueue(QUEUE, 'hello message');
		console.log('Message publish is completed.');
	});

	it('when processMessage, then consume message', () => {
		const messageConsumer = new MessageConsumer(rabbitMqConnection);
		messageConsumer.connect();
		messageConsumer.processMessage(QUEUE);
	});
});