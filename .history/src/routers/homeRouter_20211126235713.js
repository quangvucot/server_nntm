const express = require("express");
const router = express.Router();
const HomeController = require("../app/Controllers/HomeController");
const AccountController = require("../app/Controllers/AccountController");
router.get("/home", AccountController.getAllUsers);
router.get("/nntm", AccountController.getAllUsers);

module.exports = router;
