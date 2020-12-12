module.exports = {
  preset: "@shelf/jest-dynamodb",
  name: "redis-cluster-docker",
  displayName: "redis-cluster-docker",
  rootDir: "./",
  testMatch: ["<rootDir>/__tests__/*.test.js"],
  moduleFileExtensions: ["js"],
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  coverageReporters: ["lcov", "html"],
};
