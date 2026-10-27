const { getStatus } = require("../src/app");

const result = getStatus();

if (result.status !== "healthy") {
  throw new Error("Health check failed");
}

console.log("All tests passed");