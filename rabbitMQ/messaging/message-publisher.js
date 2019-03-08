const BaseMessenger = require('./base-messenger');

class MessagePublisher extends BaseMessenger {
	constructor(createConnection) {
		super(createConnection);
	}

	async sendToQueue(queue, message) {
		const ch = await this.getChannel();

		try {
			await ch.assertQueue(queue);
			ch.sendToQueue(queue, Buffer.from(message));
		} catch (err) {
			console.log('MessagePublisher throw ', err);
			throw err;
		}
	}
}

module.exports = MessagePublisher;