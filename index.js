const Redis = require("ioredis");

const redis = new Redis({
  host: process.env.REDIS_HOST_TEST,
  port: Number.parseInt(process.env.REDIS_PORT_TEST, 10),
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
