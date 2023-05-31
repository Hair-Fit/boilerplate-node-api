const express = require("express");
const { exampleController } = require("../controllers/example");


let router = express.Router();

//make ur api router here
router.get("/", exampleController);

// example
// router.get('/url', yourController.yourControllerMethod );
// router.get('/url:id', yourController.yourControllerMethod );
// router.get('/login', login.WithEmail)


exports.api = router;
