const router = require("express").Router();
const verify = require("../jwt/verifyToken");
const Member = require("../models/Member");
const { verifyLoginCredentials } = require("../validation/v_login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const randomToken = require("../jwt/randToken");

//LOGIN USER
router.post("/login", async (req, res) => {
  try {
    const { error } = verifyLoginCredentials(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const isUserExits = await Member.findOne({ username: req.body.username });

    if (!isUserExits || isUserExits == null)
      return res.status(400).json({ message: "Username doesnot exist!!" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      isUserExits.password
    );

    // return res.send(
    //   validPassword + " - " + req.body.password + " - " + isUserExits.password
    // );

    if (!validPassword)
      return res.status(400).json({ message: "Invalid Password!!" });

    //create and assign a token
    const token = jwt.sign(
      { _id: randomToken(5, null) },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "20s"
      }
    );

    res.json({
      _id: isUserExits._id,
      username: isUserExits.username,
      token: token,
      message: "authenticated"
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
