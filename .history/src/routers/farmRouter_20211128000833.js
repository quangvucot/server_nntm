const express = require("express");
const router = express.Router();
const FarmController = require("../app/Controllers/FarmController");

router.post("/farm", FarmController.createNewFarm);
router.get("/farm/:userID", FarmController.getAllFarmByUserID);
router.get("/farm/update/:userID", FarmController.getAllFarmByUserID);
router.delete("/farm/delete/:userID", FarmController.deleteFarm);
module.exports = router;
