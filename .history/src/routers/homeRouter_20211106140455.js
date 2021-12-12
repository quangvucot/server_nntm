const express = require("express");
const router = express.Router();
const DataController = require("../app/Controllers/DatasController");
// router.get("/users/:userName", DataController.getUsersByUsername);
router.get("/nntm", DataController.getSensorData);


module.exports = router;
