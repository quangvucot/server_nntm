const express = require("express");
const router = express.Router();
const DataController = require("../app/Controllers/DatasController");
const { updateDataSensor } = require("../app/Models/sensorModal");
// Lấy dữ liệu thông qua URL API rồi lưu vào DATABASE
router.get("/sensors", DataController.postSensorData);

// Lấy đữ liệu theo ID
router.get("/sensor/:id", DataController.getSensorById);

// Cập nhật dữ liệu
const data = res.body;
updateDataSensor(data, (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  return res.json({
    success: 1,
    data: "Update Data Successfully",
  });
});

// Xóa dữ liệu
module.exports = router;
