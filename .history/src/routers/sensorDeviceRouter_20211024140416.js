const express = require("express");
const router = express.Router();
const DataController = require("../app/Controllers/DatasController");

router.get("/sensors", DataController.getSensorData);
router.post("/sensors", DataController.getSensorData);
router.get("/sensor/:id", DataController.getSensorData);

module.exports = router;
