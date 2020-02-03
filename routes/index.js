'use strict';

module.exports =
    function (app) {
        require("./jwt_token")(app);
        // require("./login")(app);
        // require("./management")(app);        
    }