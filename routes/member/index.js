'use strict';

const member = require("./member")

const member_routes = (app) => {

    app.get("/member", member.getAll);
}

module.exports = member_routes;