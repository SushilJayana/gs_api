const router = require("express").Router();
const Package = require("../../models/Package");


module.exports = {
  //get a package by id
  getPackageById: async (req, res) => {
    try {
      const package = await Package.findById(req.params.id);
      res.json(package);
    }
    catch (err) {
      res.status(400).json({ status: "error", message: err })
    }
  },

  //get all packages
  getAllPackage: async (req, res) => {
    try {
      const package = await Package.find();
      res.json(package);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },


  // Add a package
  addPackage: async (req, res) => {
    try {
      const isPackageExist = await Package.findOne({ name: req.body.name });
      if (isPackageExist) return res.json({ message: "Similar package already exist" })

      const package = new Package({
        name: req.body.name,
        price: req.body.price,
        duration: req.body.duration,
        discount: req.body.discount
      });

      const addPackage = await package.save();
      res.json({ "status": "success", "payload": addPackage })

    } catch{
      res.status(400).json({ status: "error", message: err });
    }
  }
}
