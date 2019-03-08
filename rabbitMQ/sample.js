const MessagePublisher = require('./messaging/message-publisher'),
		  MessageConsumer = require('./messaging/message-consumer'),
		  createConnection = require('./messaging/rabbitmq-connection');

const Q = 'sample';

const messagePublisher = new MessagePublisher(createConnection);
try {
	messagePublisher.connect();
	messagePublisher.sendToQueue(Q, 'hello message');
	console.log('Message publish is completed.');
} catch (err) {
	console.log('Message publish is failed,' + err);
}

const messageConsumer = new MessageConsumer(createConnection);
try {
	messageConsumer.connect();
	messageConsumer.processMessage(Q);
} catch (err) {
	console.log('Message consumer is failed,' + err);
}
