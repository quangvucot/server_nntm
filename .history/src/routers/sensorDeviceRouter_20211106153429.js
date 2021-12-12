const express = require("express");
const router = express.Router();
const DataController = require("../app/Controllers/DatasController");
const { updateDataSensor } = require("../app/Models/sensorModal");

// Xóa dữ liệu
router.get("/sensors/check/:deviceID", DataController.check);
// Lấy dữ liệu thông qua URL API rồi lưu vào DATABASE

router.get("/sensors", DataController.postSensorData);

// Lấy đữ liệu theo ID
router.get("/sensors/:deviceID", DataController.getSensorById);

// Cập nhật dữ liệu
router.patch("/sensors/update", DataController.updateDatas);

// Test

module.exports = router;
