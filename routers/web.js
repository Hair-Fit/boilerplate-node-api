const express = require("express");
let router = express.Router();

//make ur web app router here (like for using view)
router.get("/", (req, res) => {
  res.send("Hello World!");
});

exports.web = router;
