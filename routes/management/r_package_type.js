const PackageType = require("../../models/PackageType");
var mongoose = require('mongoose');

module.exports = {
    //get package type by id
    getPackageTypeById: async (req, res) => {
        try {
            const package_type = await PackageType.findById(req.params.id);
            res.json(package_type);
        } catch (error) {
            res.status(404).json({ status: "error", message: error });
        }
    },

    //get all package types
    getAllPackageType: async (req, res) => {
        try {
            const package_type = await PackageType.find();
            res.json(package_type);
        } catch (err) {
            res.status(404).json({ status: "error", message: err });
        }
    },

    //add a package_type`
    addPackageType: async (req, res) => {
        try {

            res.send("sdf");
            return;
            const isPackageTypeExist = await PackageType.findOne({
                name: req.body.name
            });

            if (isPackageTypeExist) return res.json({ message: "Similar package type already exists" });


            let obj = {
                name: req.body.name,
                type_identity: req.body.type_identity,
                created_by: ObjectId(req.body.created_by).toString()
            }

            res.json(obj);

            const package_type = new PackageType({
                name: req.body.name,
                type_identity: req.body.type_identity,
                created_by: ObjectId(req.body.created_by).toString()
            });

            const savePackageType = await package_type.save();
            res.send(savePackageType);

        } catch (error) {
            res.json({ message: error.message });
        }
    }
}