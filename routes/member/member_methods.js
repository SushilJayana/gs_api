const Member = require("../../models/Member");

let member_methods = {
    getAll: async (req, res) => {
        try {
            const members = await Member.find().select('-password -password_hash');
            res.json(members);
        } catch (error) {
            res.json({ message: error.message });
        }
    }
}

module.exports = member_methods;