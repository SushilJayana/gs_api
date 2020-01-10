const router = require("express").Router();
const Package = require("../models/Package");

router.get("/package", async (req, res) => {
  try {
    const package = await Package.find();
    res.json(package);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

module.exports = router;
