const express = require("express");
const router = express.Router();
const DataController = require("../app/Controllers/DatasController");
const { updateDataSensor } = require("../app/Models/sensorModal");

// Lấy dữ liệu thông qua URL API rồi lưu vào DATABASE

router.get("/sensors", DataController.postSensorData);

// L
router.get("/getAllsensors", checkToken, DataController.getAllSensor);
// Lấy đữ liệu theo ID
router.get("/sensors/:deviceID", DataController.getSensorById);

// Cập nhật dữ liệu
router.patch("/sensors/update", DataController.updateDatas);
// Xóa dữ liệu
router.get("/sensors/check/:deviceID", DataController.check);
// Test

module.exports = router;
