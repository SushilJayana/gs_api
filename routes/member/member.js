const Member = require("../../models/Member");


console.log("here too")

let member = {
    getAll: async (req, res,next) => {
        try {
            //const members = await Member.find().select('-password -password_hash');
            res.json("hello");
        } catch (error) {
            res.json({ message: error.message });
        }
        next();
    }
}

module.exports = member;