const Redis = require("ioredis");

const hosts =
  "redis-node-0,redis-node-1,redis-node-2,redis-node-3,redis-node-4,redis-node-5,redis-node-6,redis-node-7,redis-node-8";
const password = "waitroom";

console.log(
  `inside index js: ${JSON.stringify(
    hosts.split(",").map((host) => ({ host: `redis://${host}:6379` })),
    null,
    2
  )}`
);

const redis = new Redis.Cluster(
  hosts.split(",").map((host) => ({ host: `redis://${host}:6379` })),
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
