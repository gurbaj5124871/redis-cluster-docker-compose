const Redis = require("ioredis");

const hosts = [
  "redis-node-0:6379",
  "redis-node-1:6380",
  "redis-node-2:6381",
  "redis-node-3:6382",
  "redis-node-4:6383",
  "redis-node-5:6384",
  "redis-node-6:6385",
  "redis-node-7:6386",
  "redis-node-8:6387",
];
const password = "waitroom";

console.log(`hosts:: ${hosts.map((url) => `redis://${url}`)}`);

const redis = new Redis.Cluster(
  hosts.map((url) => `redis://${url}`),
  {
    redisOptions: {
      db: 0,
      password,
    },
  }
);

redis
  .on("connect", () => {
    console.info("Redis connected");
    process.exit(0);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
