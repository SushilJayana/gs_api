const router = require("express").Router();
const Package = require("../../models/Package");

//get a package by id
router.get("/package/:id", async (req, res) => {
  try {

    const package = await Package.findById(req.params.id);
    res.json(package);
  }
  catch (err) {
    res.status(404).json({ status: "error", message: err })
  }
})

//get all packages
router.get("/package", async (req, res) => {
  try {
    const package = await Package.find();
    res.json(package);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

// Add a package
router.post("/package/add", async (req, res) => {
  try {

    const isPackageExist = await Package.findOne({
      name: req.body.name
    });

    if (isPackageExist) return res.json({ message: "Similar package already exist" })

    const package = new Package({
      name : req.body.name,

    })

  } catch{
    res.status(404).json({ status: "error", message: err });
  }
})

module.exports = router;
