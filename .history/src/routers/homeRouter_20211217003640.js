const express = require("express");
const router = express.Router();
const HomeController = require("../app/Controllers/HomeController");
const AccountController = require("../app/Controllers/AccountController");
router.get("/nntm", HomeController.home);
router.get("/home", AccountController.getAllUsers);
module.exports = router;
