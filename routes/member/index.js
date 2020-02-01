'use strict';

//const member = require("./member")

import member from "./member"

console.log("member index")

const member_routes = 
(app) => {

    app.get("/member", member.getAll);
}

module.exports = member_routes;