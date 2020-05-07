const jwt = require("jsonwebtoken");
const randomToken = require("./jwt/randomToken");

module.exports = {
  generateToken: (key) => {

    //create and assign a token
    const token = jwt.sign(
      { _id: randomToken(key.length, key) },
      process.env.TOKEN_SECRET,
      // {
      //   expiresIn: "60s"
      // }
    );

    return token;
    //   res.header("auth-token", token).send({ token: token });
  }

}
