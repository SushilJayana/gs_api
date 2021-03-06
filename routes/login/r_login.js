const verify = require("../jwt_token/jwt/verifyToken");
const Member = require("../../models/Member");
const { verifyLoginCredentials } = require("../../validation/v_login");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../jwt_token/generateToken");

//LOGIN USER

module.exports = {
  processLogin: async (req, res) => {
    try {

      const { error } = verifyLoginCredentials(req.body);

      if (error)
        return res.status(200).json({ message: error.details[0].message });

      const isUserExits = await Member.findOne({ username: req.body.username });

      if (!isUserExits || isUserExits == null)
        return res.status(200).json({ message: "Username doesnot exist!!" });

      const validPassword = await bcrypt.compare(
        req.body.password,
        isUserExits.password
      );
      
      if (!validPassword)
        return res.status(200).json({ message: "Invalid Password!!" });

      //create and assign a token
      const token = generateToken(isUserExits._id);

      res.json({
        _id: isUserExits._id,
        username: isUserExits.username,
        token: token,
        message: "authenticated"
      });
    } catch (err) {
      res.json({ message: 'hey' + err.message });
    }
  }
}

