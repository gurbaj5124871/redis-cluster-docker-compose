const Redis = require("ioredis");

// const hosts = [
//   "192.168.16.5:6380",
//   "192.168.16.10:6381",
//   "192.168.16.2:6382",
//   "192.168.16.6:6383",
//   "192.168.16.4:6384",
//   "192.168.16.9:6385",
//   "192.168.16.7:6386",
//   "192.168.16.8:6387",
//   "192.168.16.3:6388",
// ];
// const hosts = [
//   "redis-node-0:6380",
//   "redis-node-1:6381",
//   "redis-node-2:6382",
//   "redis-node-3:6383",
//   "redis-node-4:6384",
//   "redis-node-5:6385",
//   "redis-node-6:6386",
//   "redis-node-7:6387",
//   "redis-node-8:6388",
// ];
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

// console.log(`hosts:: ${hosts.map((url) => `redis://${url}`)}`);

// const redis = new Redis.Cluster(
//   hosts.map((url) => {
//     const [host, port] = url.split(":");
//     return { port };
//   }),
//   {
//     redisOptions: {
//       db: 0,
//       password,
//     },
//   }
// );

const redis = new Redis({
  port: 6379,
  db: 0,
});

redis
  .on("connect", () => {
    console.info("Redis connected");
    process.exit(0);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
