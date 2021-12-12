const express = require("express");
const router = express.Router();
const FarmController = require("../app/Controllers/FarmController");

router.get("/farm/:userID", FarmController.getAllFarmByUserID);
module.exports = router;