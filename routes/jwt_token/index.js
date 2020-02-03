
const token = require("./generateToken");

module.exports = (app)=>{

    app.use("/gsapi/token",token.generateToken);    

}