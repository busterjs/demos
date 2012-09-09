buster.testCase("Slow tests", {
    setUp: function () {
        this.timeout = 4000;
    },

    "has a slow test": function (done) {
        assert(true);
        setTimeout(done, 1000);
    },

    "has another slow test": function (done) {
        assert(true);
        setTimeout(done, 1000);
    },

    "has a really fast test too": function () {
        assert(true);
    },

    "but now comes a few more slow ones": function (done) {
        assert(true);
        setTimeout(done, 1000);
    },

    "this one is not as slow though": function (done) {
        assert(true);
        setTimeout(done, 400);
    },

    "this one is also not as slow though": function (done) {
        assert(true);
        setTimeout(done, 200);
    },

    "here comes another slightly faster one": function (done) {
        assert(true);
        setTimeout(done, 300);
    }
});
