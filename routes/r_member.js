const router = require("express").Router();
const Member = require("../models/Member");
const { memberValidation } = require("../validation/v_member");
const verify = require("../jwt/verifyToken");
const bcryptjs = require("bcryptjs");

//GET ALL MEMBER
router.get("/member", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.json({ message: err.message });
  }
});
//GET MEMBER BY ID
router.get("/member/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//ADD MEMBER
router.post("/member/add", verify, async (req, res) => {
  const { error } = memberValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  const isUsernameExist = await Member.findOne({
    username: req.body.username
  });

  //Hash passwords
  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash((req.body.password).trim(), salt);

  if (isUsernameExist) return res.json({ message: "Username already exist" });

  const member = new Member({
    username: (req.body.username).trim(),
    firstname: (req.body.firstname).trim(),
    lastname: (req.body.lastname).trim(),
    user_type: (req.body.user_type).trim(),
    created_by: (req.body.created_by).trim(),
    password: hashPassword.trim(),
    password_hash: salt
  });

  try {
    const saveMember = await member.save();
    res.send({ id: saveMember._id, username: saveMember.username });
  } catch (err) {
    res.json({ message: err.message });
  }
});

//DELETE A MEMBER
router.delete("/member/remove/:id", async (req, res) => {
  try {
    const removedMember = await Member.remove({ _id: req.params.id });
    res.json(removedMember);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//UPDATE A MEMBER
router.put("/member/update/:id", verify, async (req, res) => {
  try {

    let updateData = {
      username: (req.body.username).trim(),
      firstname: (req.body.firstname).trim(),
      lastname: (req.body.lastname).trim(),
      user_type: (req.body.user_type).trim(),
      joined_date: (req.body.joined_date).trim(),
    }

    if (req.body.password) {

      //Hash passwords
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash((req.body.password).trim(), salt);
      updateData.password = hashPassword;
      updateData.password_hash = salt;
    }

    const updatedMember = await Member.updateOne(
      { _id: req.params.id },
      {
        $set: updateData
      }
    );
    res.json(updatedMember);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
