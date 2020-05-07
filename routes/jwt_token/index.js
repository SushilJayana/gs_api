
const token = require("./generateToken");

module.exports = (app) => {
    app.use("/api/gs/token", token.generateToken);
}