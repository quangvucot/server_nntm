const express = require("express");
const router = express.Router();
const AccountController = require("../app/Controllers/AccountController");
const { checkToken } = require("../../src/app/auth/token_validation");
router.post("/auth/login", AccountController.login);

module.exports = router;
