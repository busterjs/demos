var strftime = window.strftime;

var assert = buster.assert;

buster.testCase("Date strftime tests", {
    setUp: function () {
        this.date = new Date(2009, 11, 5);
    },

    "%Y": {
        setUp: function () {
            this.year = strftime(this.date, "%Y");
        },

        "should return full year": function () {
            assert.equals(this.year, "2009");
        },

        "should return a string": function () {
            assert.equals(typeof this.year, "string");
        }
    },

    "%y should return two digit year": function () {
        assert.equals(strftime(this.date, "%y"), "09");
    },

    "%m should return month": function () {
        assert.equals(strftime(this.date, "%m"), "12");
    },

    "%d should return date": function () {
        assert.equals(strftime(this.date, "%d"), "05");
    },

    "// %j should return the day of the year": function () {
        var date = new Date(2011, 0, 1);
        assert.equals(strftime(date, "%j"), 1);
    }
});
