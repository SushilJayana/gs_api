
const login = require("./r_login")

module.exports = (app) => {

    app.get("/login", login.processLogin)

}