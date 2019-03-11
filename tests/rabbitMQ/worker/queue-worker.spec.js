const workerConfig = require('../../../lib/rabbitMQ/worker/order-notification-worker-config'),
		rabbitMqConnection = require('../../../lib/rabbitMQ/messaging/rabbitmq-connection'),
		QueueWorker = require('../../../lib/rabbitMQ/worker/queue-worker');

describe('rabbitMQ sample', async () => {
	let queueWorker = new QueueWorker('order-notification', workerConfig, rabbitMqConnection);
	await queueWorker.start();

	it('when publish message, then run processor with message ', () => {
		console.log('is print published message?');
	});
});