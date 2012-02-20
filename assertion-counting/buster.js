module.exports["Browser tests"] = {
    tests: ["thing-test.js"]
};

module.exports["Node tests"] = {
    extends: "Browser tests",
    environment: "node"
};
