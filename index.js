const Redis = require("ioredis");

const hosts = [
  "localhost:6380",
  "localhost:6381",
  "localhost:6382",
  "localhost:6383",
  "localhost:6384",
  "localhost:6385",
  "localhost:6386",
  "localhost:6387",
  "localhost:6388",
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

// const redis = new Redis(`redis://${hosts[0]}}`);

redis
  .on("connect", () => {
    console.info("Redis connected");
    process.exit(0);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
