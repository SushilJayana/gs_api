const router = require("express").Router();
const jwt = require("jsonwebtoken");
const randomToken = require("./jwt/randToken");

module.exports = {
  generateToken :(req, res) => {
    //create and assign a token
    const token = jwt.sign(
      { _id: randomToken(5, null) },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "20s"
      }
    );
    res.header("auth-token", token).send({ token: token });
  }
  
}
