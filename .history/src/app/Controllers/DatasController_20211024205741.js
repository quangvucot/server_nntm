const { createDataSensor } = require("../Models/sensorModal");
const { getUserByUsername } = require("../Models/userModal");

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

  getSensorById(req, res) {
    res.send({
      data: req.body,
      params: {
        id: req.params.id,
        name: req.params.name,
      },
    });
  }

  getAllSensor(req, res) {
    res.send({
      data: req.body,
      params: {
        id: req.params.id,
        name: req.params.name,
      },
    });
  }

  postSensorData(req, res) {
    const dataSensor = req.query;
    createDataSensor(dataSensor, (err, results) => {
      if (err) {
        return res.status(500).send({ success: 0, message: "Not update data" });
      }
      return res.status(200).json({
        success: 1,
        dataSensor: dataSensor,
      });
    });
    res.send({
      dataSensor: dataSensor,
    });
    console.log(
      "Id Sensor: " +
        dataSensor.id +
        " Hum: " +
        dataSensor.hum +
        "Temp: " +
        dataSensor.temp
    );
  }
}
module.exports = new DatasController();
