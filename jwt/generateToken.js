const router = require("express").Router();
const jwt = require("jsonwebtoken");
const randomToken = require("./randToken");

router.get("/token", (req, res) => {
  //create and assign a token
  const token = jwt.sign(
    { _id: randomToken(5, null) },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "20s"
    }
  );
  res.header("auth-token", token).send({ token: token });
});

module.exports = router;
