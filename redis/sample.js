const RedisClient = require('./common/redis-client'),
		redisConfig = require('./common/redis-config.json');

const KEY = 'chennai';

const redisClient = new RedisClient(redisConfig);

(async () => {
	console.log('1. redis set, get');
	await redisClient.set(KEY, 'escape');
	const result = await redisClient.get(KEY);
	console.log(result);

	console.log('2. redis del');
	await redisClient.del(KEY);
	const empty = await redisClient.get(KEY);
	console.log(empty);

	console.log('3. redis sadd, smembers');
	await redisClient.setAdd(KEY, 'welcome');
	await redisClient.setAdd(KEY, 'is incredible');
	const members = await redisClient.getSet(KEY);
	console.log(members);

	console.log('4. redis srem');
	await redisClient.setRemove(KEY, "is incredible");
	const emptyMembers = await redisClient.getSet(KEY);
	console.log(emptyMembers);

	await redisClient.close();
})();