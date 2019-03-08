class BaseMessenger {
	constructor(createConnection) {
		this.createConnection = createConnection;
	}

	async connect() {
		this.connection = await this.createConnection();
		this.connection.on('close', (e) => {
			this._handleRabbitMQError(e);
		});
		this.connection.on('error', (e) => {
			this._handleRabbitMQError(e);
		});
	}

	async getChannel() {
		try {
			if (!this.connection) {
				await this.connect();
			}

			return await this.connection.createConfirmChannel();
		} catch (err) {
			console.log('BaseMessenger throw ', err);
			throw err;
		}
	}

	_handleRabbitMQError(error) {
		console.log('BaseMessenger', '_handleRabbitMQError', error);
		// return retry(caller.reconnect(this), { interval: 30 * 1000, factor: 2, retries: 7 }); //retries for 30s, 60s, 120s, 240s so on.
	}
}

module.exports = BaseMessenger;