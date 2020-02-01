const Member = require("../../models/Member");

let member = {
    getAll: async (req, res,next) => {
        try {
            const members = await Member.find().select('-password -password_hash');
            res.json(members);
        } catch (error) {
            res.json({ message: error.message });
        }
        next();
    }
}