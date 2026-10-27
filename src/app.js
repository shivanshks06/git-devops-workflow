function getStatus() {
  return {
    application: "git-devops-workflow-lab",
    status: "healthy"
  };
}

function getVersion() {
  return "1.0.0";
}

module.exports = { getStatus, getVersion };