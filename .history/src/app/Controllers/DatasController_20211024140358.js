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


  getAllInfomationSensors(req, res) {
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
