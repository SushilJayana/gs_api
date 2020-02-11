
const login = require("./r_login")

module.exports = (app) => {
    app.post("/api/gs/login", login.processLogin)
}