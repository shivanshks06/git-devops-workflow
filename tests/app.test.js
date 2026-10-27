const { getStatus, getVersion } = require("../src/app");

if (getStatus().status !== "healthy") {
  throw new Error("Health check failed");
}

if (getVersion() !== "1.0.0") {
  throw new Error("Version check failed");
}

console.log("All tests passed");