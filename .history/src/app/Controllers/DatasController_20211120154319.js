const {
  createDataSensor,
  getDataSensorById,
  deleteDataSensor,
  getDataSensor,
} = require("../Models/sensorModal");

class DatasController {
  getUsersByUsername(req, res) {
    const userName = req.params.userName;
    getUserByUsername(userName, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({ success: 0, message: "Không tìm thấy" });
      }
      return res.json({ success: 1, data: results });
    });
  }

  // Get dữ liệu từ sensor
  getSensorById(req, res) {
    const deviceID = req.params.deviceID;
    getDataSensorById(deviceID, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({ success: 0, message: "Không tìm thấy" });
      }
      return res.json({ success: 1, data: results });
    });
  }

  // Lấy tất cả dữ liệu sensor
  getAllSensor(req, res) {
    getDataSensor((err, results) => {
      if (err) {
        return res.json({ success: 0, message: err.message });
      }
      return res.json({ data: results });
    });
  }

  // Post dữ liệu bằng data
  postSensorData(req, res) {
    const valuesSensor = req.query;

    createDataSensor(valuesSensor, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  }

  // update data
  updateData(req, res) {
    const data = req.body;
    updateDataSensor(data, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      return res.json({
        success: 1,
        data: "Cập nhật thành công",
      });
    });
  }

  // Xóa dữ liệu bằng ID
  deleteDataById(req, res) {
    // const deviceID = req.params.deviceID;
    return res.send("Welcome To Server");
    // deleteDataById(deviceID, (err, results) => {
    //   console.log("id", deviceID);
    //   if (err) {
    //     console.log(err);
    //   }
    //   if (!results) {
    //     return res.json({ success: 0, message: "Not Found" });
    //   }
    //   return res.json({ success: 1, message: "Delete Successfully" });
    // });
  }
  check(req, res) {
    const deviceID = req.params.deviceID;
    console.log("deviceID", deviceID);
    deleteDataSensor(deviceID, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({ success: 0, message: "Not Found" });
      }
      return res.json({ success: 1, message: "Delete Successfully" });
    });
  }

  switchFirstLed() {

  }
}
module.exports = new DatasController();
