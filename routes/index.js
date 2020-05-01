'use strict';

module.exports =
    function (app) {
        require("./login")(app);
        require("./management")(app);
    }