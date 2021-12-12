const express = require("express");
const router = express.Router();
const DataController = require("../app/Controllers/DatasController");

router.get("/sensors", DataController.getSensorData);
router.post("/sensors", DataController.data);
router.get("/sensor/:id", DataController.getUsers);
module.exports = router;
