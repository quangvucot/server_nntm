const express = require("express");
const router = express.Router();
const HomeController = require("../app/Controllers/HomeController");

router.get("/nntm", HomeController.home);

module.exports = router;
