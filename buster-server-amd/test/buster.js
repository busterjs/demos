var config = exports; // Vanity

config["Browser tests"] = {
    environment: "browser",
    rootPath: "../",
    libs: [
      "libs/require.js",
      "config.js"
    ],
    sources: ["js/*.js"],
    tests: ["test/*-test.js"],
    extensions: [require('buster-amd')],
    "buster-amd": {
        pathMapper: function (path) {
          // Removes initial slash for test file paths such as
          // /test/strftime-test.js
          if(path.indexOf('/') === 0){
            return path.substr(1, path.length);
          }
          return path;
        }
    }
};
