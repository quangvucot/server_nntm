const express = require("express");
const router = express.Router();
const AccountController = require("../app/Controllers/AccountController");
const { validateRegister } = require("../../src/middleware/users");
const schema = Joi.object({
  username: Joi.string().min(6).required,
  password: Joi.string().min(6).required,
  phoneNumber: Joi.string().min(10).required,
});
router.post("/auth/register", AccountController.register);

module.exports = router;
