const express = require("express");
const router = express.Router();
const DataController = require("../app/Controllers/DatasController");
const { updateDataSensor } = require("../app/Models/sensorModal");
const { checkToken } = require("../app/auth/token_validation");
const { updateControl } = require("../app/Controllers/DatasController");
// Lấy dữ liệu thông qua URL API rồi lưu vào DATABASE

router.patch("/sensors", DataController.updateControl);

router.post("/addSensors", DataController.addControllDevice);

router.get("/sensors", DataController.postSensorData);

router.get("/sensors/relayDevice", DataController.getRelayDevice);

router.get("/sensors/relay", DataController.controllDevice);
// L
router.get("/getAllsensors", DataController.getAllSensor);
// Lấy đữ liệu theo ID
router.get("/sensors/:deviceID", DataController.getSensorById);

// Cập nhật dữ liệu
router.patch("/sensors/update", DataController.updateData);
// Xóa dữ liệu
router.get("/sensors/check/:deviceID", DataController.check);
// Test

module.exports = router;
