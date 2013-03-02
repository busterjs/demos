// Based on https://gist.github.com/1904218
(function () {
    function strftime(date, format) {

        return (format + "").replace(/%([a-zA-Z])/g, function (m, f) {
            var formatter = formats && formats[f];

            if (typeof formatter == "function") {
                return formatter.call(formats, date);
            } else if (typeof formatter == "string") {
                return strftime(date, formatter);
            }

            return "%" + f;
        });
    }

    // Internal helper
    function zeroPad(num) {
        return (+num < 10 ? "0" : "") + num;
    }

    var formats = {
        // Formatting methods
        d: function (date) {
            return zeroPad(date.getDate());
        },

        m: function (date) {
            return zeroPad(date.getMonth() + 1);
        },

        y: function (date) {
            return zeroPad(date.getYear() % 100);
        },

        Y: function (date) {
            return date.getFullYear();
        },

        j: function (date) {
            var jan1 = new Date(date.getFullYear(), 0, 1);
            var diff = date.getTime() - jan1.getTime();

            // 86400000 == 60 * 60 * 24 * 1000
            return Math.ceil(diff / 86400000);
        },

        // Format shorthands
        F: "%Y-%m-%d",
        D: "%m/%d/%y"
    };

    window.strftime = strftime;
}());
