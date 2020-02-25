const router = require("express").Router();
const Member = require("../../models/Member");
const { memberValidation } = require("../../validation/v_member");
const verify = require("../jwt_token/jwt/verifyToken");
const bcryptjs = require("bcryptjs");

module.exports = {

  //GET ALL MEMBER
  getAllMember: async (req, res) => {
    try {
      const members = await Member.find().select('-password -password_hash');
      res.json(members);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  //GET MEMBER BY ID
  getMemberByID: async (req, res) => {
    try {
      const member = await Member.findById(req.params.id).select('-password -password_hash');
      res.json(member);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  //ADD MEMBER
  addMember: async (req, res) => {

    try {

      const { error } = memberValidation(req.body);
      if (error) return res.status(200).json({ status: false, message: error.details[0].message });

      const isUsernameExist = await Member.findOne({
        username: req.body.username
      });

      if (isUsernameExist) return res.json({ status: false, message: "Username already exist" });

      //Hash passwords
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash((req.body.password).trim(), salt);

      const member = new Member({
        username: (req.body.username).trim(),
        firstname: (req.body.firstname).trim(),
        lastname: (req.body.lastname).trim(),
        user_type: (req.body.user_type).trim(),
        created_by: req.body.created_by,
        password: hashPassword.trim(),
        password_hash: salt
      });


      const saveMember = await member.save();
      saveMember.password = null;
      saveMember.password_hash = null;

      res.json({ status: true, payload: saveMember });


    } catch (err) {
      res.json({ status: false, message: err.message });
    }

  },

  //UPDATE A MEMBER
  updateMember: async (req, res) => {
    try {

      let updateData = {
        username: (req.body.username).trim(),
        firstname: (req.body.firstname).trim(),
        lastname: (req.body.lastname).trim(),
        user_type: req.body.user_type,
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

      res.json({ status: true, message: "updated" });
    } catch (err) {
      res.json({ status: false, message: err.message });
    }
  },

  //DELETE A MEMBER
  deleteMember: async (req, res) => {
    try {
      const removedMember = await Member.remove({ _id: req.params.id });
      res.json(removedMember);
    } catch (err) {
      res.json({ message: err.message });
    }
  }

}