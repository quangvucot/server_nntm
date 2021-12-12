const {
  createDataSensor,
  getDataSensorById,
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
        return res.json({ success: 0, message: "Not Found" });
      }
      return res.json({ success: 1, data: results });
    });
  }



  // Get dữ liệu từ sensor
  getSensorById(req, res) {
    const diviceID = req.params.deviceID;
    getDataSensorById(diviceID, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({ success: 0, message: "Not Found" });
      }
      return res.json({ success: 1, data: results });
    });
  }



  // Lấy tất cả dữ liệu sensor
  getAllSensor(req, res) {
    res.send({
      data: req.body,
      params: {
        id: req.params.id,
        name: req.params.name,
      },
    });
  }



  // Post dữ liệu bằng data
  postSensorData(req, res) {
    const valuesSensor = req.query;
    createDataSensor(valuesSensor, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ success: 0, message: "Not update data" });
      }
      return res.status(200).json({ success: 1, data: results });
    });
    console.log(
      "Id Sensor: " +
        valuesSensor.lightIntensity +
        " Hum: " +
        valuesSensor.soilPH +
        "Temp: " +
        valuesSensor.soidHumidity
    );
  }
  //


  // update data
  updateDatas(req, res) {
    const data = req.body;
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
  }



  // Xóa dữ liệu bằng ID
  deleteDataById(req, res) {
    const data = req.body;
    deleteDataById(data, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({ success: 0, message: "Not Found" });
      }
      return res.json({ success: 1, message: "Delete Successfully" });
    });
  }
}
module.exports = new DatasController();
