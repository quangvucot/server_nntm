const {
  createDataSensor,
  getDataSensorById,
  deleteDataSensor,
  getDataSensor,
  getRelay,
  createRelayForApp,
  updateRelay,
} = require("../Models/sensorModal");

class DatasController {
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
    const valueControl = { relay3: valuesSensor.relay3 };
    console.log("valuesSensor", valuesSensor);
    createDataSensor(valuesSensor, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results.farmName });
    });

    // getRelay((err, results) => {
    //   if (err) {
    //     return res.json({ success: 0, message: err.message });
    //   }
    //   if (valuesSensor.relay3 == undefined) {
    //     valuesSensor.relay3 = results.relay3;
    //   }
    //   if (valuesSensor.relay1 == undefined) {
    //     valuesSensor.relay1 = results.relay1;
    //   }
    //   if (valuesSensor.relay2 == undefined) {
    //     valuesSensor.relay2 = results.relay2;
    //   }
    //   if (valuesSensor.relay4 == undefined) {
    //     valuesSensor.relay4 = results.relay4;
    //   }
    //   updateRelay(body, (err, results) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     return res.json({
    //       success: 1,
    //       data: body,
    //     });
    //   });
    // });
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

  controllDevice(req, res, next) {
    const relay = req.query;
    if (relay.relay3 == "") {
      req.query.relay3 = 1;
    }
    console.log("Nothing", "Nothing");
    createRelay(relay, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  }

  getRelayDevice(req, res, next) {
    getRelay((err, results) => {
      if (err) {
        return res.json({ success: 0, message: err.message });
      }
      return res.json({ data: results });
    });
  }

  addControllDevice(req, res, next) {
    const body = req.body;
    if (body.relay3 == "") {
      body.relay3 = 1;
    }
    console.log("body", body);
    createRelayForApp(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  }

  updateControl(req, res, next) {
    const body = req.body;
    console.log("body", body.relay1);
    getRelay((err, results) => {
      if (err) {
        return res.json({ success: 0, message: err.message });
      }
      if (body.relay3 == undefined) {
        body.relay3 = results.relay3;
      }
      if (body.relay1 == undefined) {
        body.relay1 = results.relay1;
      }
      if (body.relay2 == undefined) {
        body.relay2 = results.relay2;
      }
      if (body.relay4 == undefined) {
        body.relay4 = results.relay4;
      }
      updateRelay(body, (err, results) => {
        if (err) {
          console.error(err);
          return;
        }
        return res.json({
          success: 1,
          data: body,
        });
      });
    });
  }
}
module.exports = new DatasController();
