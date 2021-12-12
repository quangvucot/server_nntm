const express = require("express");
const router = express.Router();
const DataController = require("../app/Controllers/DatasController");

router.get("/sensors", DataController.getAllSensor);
// router.post("/sensors", DataController.postSensorData);
router.get("/sensor/:id", DataController.getSensorById);

module.exports = router;
