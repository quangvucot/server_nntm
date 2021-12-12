const express = require("express");
const router = express.Router();
const AccountController = require("../app/Controllers/AccountController");

router.post("/auth/login", AccountController.login);

module.exports = router;
