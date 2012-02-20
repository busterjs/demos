if (typeof require == "function" && typeof module == "object") {
    var buster = require("buster");
}

buster.testCase("Sample test", {
    "async tests": {
        "two failing assertions, should only print the first one": function (done) {
            var a = 42;

            setTimeout(done(function () {
                assert.equals(a, 41);
                assert.equals(a, 43);
            }), 10);
        }
    },

    "sync tests": {
        "two failing assertions, should throw on first one": function () {
            var a = 42;

            assert.equals(a, 41);
            assert.equals(a, 43);
        }
    }
});
