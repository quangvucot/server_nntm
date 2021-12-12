const express = require("express");
const router = express.Router();
const DataController = require("../app/Controllers/DatasController");
const { updateDataSensor } = require("../app/Models/sensorModal");
// Lấy dữ liệu thông qua URL API rồi lưu vào DATABASE
router.get("/sensors", DataController.postSensorData);

// Lấy đữ liệu theo ID
router.get("/sensor/:id", DataController.getDataSensorById);

// Cập nhật dữ liệu
router.patch("sensors/update", DataController.updateDatas);
// Xóa dữ liệu
router.delete("sensors/delete/:id", DataController.deleteDataById);

// Test

module.exports = router;
