const RedisClient = require('./common/redis-client'),
      redisConfig = require('./common/redis-config.json');

const KEY = 'chennai';

const redisClient = new RedisClient(redisConfig);

(async () => {
    console.log('redis start');
    await redisClient.set(KEY, 'escape');
    const result = await redisClient.get(KEY);
    assert(result, 'escape');
})();
