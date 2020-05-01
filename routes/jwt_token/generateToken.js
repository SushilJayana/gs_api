const jwt = require("jsonwebtoken");
const randomToken = require("./jwt/randomToken");

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

    return token;
 //   res.header("auth-token", token).send({ token: token });
  }
  
}
