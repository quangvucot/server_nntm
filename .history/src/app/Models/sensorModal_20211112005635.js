const db = require("../../config/db");

module.exports = {
  // Đẩy dữ liệu từ cảm biến vào database
  createDataSensor: (sensorData, callback) => {
    db.query(
      `INSERT INTO Device(temperature, humidity, soidHumidity, soilPH, lightIntensity) VALUES (?, ?, ?, ?, ?)`,
      [
        sensorData.temperature,
        sensorData.humidity,
        sensorData.soidHumidity,
        sensorData.soilPH,
        sensorData.lightIntensity,
      ],
      (err, results, fields) => {
        if (err) {
          callback(err);
        }
        return callback(null, results);
      }
    );
  },

  // Lấy tất cả thông tin database ra json
  getDataSensor: (callback) => {
    db.query(
      `SELECT * FROM device ORDER BY deviceID DESC LIMIT 1`,
      [],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results[0]);
      }
    );
  },

  // Lấy dữ liệu sensor thông qua ID Thiết bị
  getDataSensorById: (deviceID, callback) => {
    db.query(
      `SELECT * FROM device WHERE deviceID = ? `,
      [deviceID],
      (err, results, fields) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },

  // Cập nhật dữ liệu vào Database
  updateDataSensor: (data, callback) => {
    db.query(
      `UPDATE devices SET temperature= ?, humidity = ?, soidHumidity = ?, soilPH = ?, lightIntensity= ? `,
      [
        data.temperature,
        data.humidity,
        data.soidHumidity,
        data.soilPH,
        data.lightIntensity,
      ],
      (err, results, fields) => {
        if (err) {
          callback(err);
        }
        return callback(null, results[0]);
      }
    );
  },

  // Xóa dữ liệu database
  deleteDataSensor: (data, callback) => {
    db.query(
      `DELETE FROM device WHERE deviceID = ?`,
      [data.deviceID],
      (err, results, fields) => {
        if (err) {
          callback(err);
        }
        return callback(null, results);
      }
    );
  },
};
