'use strict';

const member_methods = require("./member_methods")

const member_routes = (app) => {
    app.get("/member", member_methods.getAll);
}


module.exports = member_routes;