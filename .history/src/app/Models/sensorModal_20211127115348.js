const db = require("../../config/db");

module.exports = {
  // Đẩy dữ liệu từ cảm biến vào database
  createDataSensor: (sensorData, callback) => {
    db.query(
      `INSERT INTO devices (temperature, humidity, soilHumidity, soilPH, lightIntensity) VALUES
      (?, ?, ?,?,?);`,
      [
        sensorData.temperature,
        sensorData.humidity,
        sensorData.soilHumidity,
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
      `SELECT * FROM devices ORDER BY deviceID DESC LIMIT 1`,
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
      `SELECT * FROM devices WHERE deviceID = ? `,
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
      `UPDATE devices SET temperature= ?, humidity = ?, soilHumidity = ?, soilPH = ?, lightIntensity= ? `,
      [
        data.temperature,
        data.humidity,
        data.soilHumidity,
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
      `DELETE FROM devices WHERE deviceID = ?`,
      [data.deviceID],
      (err, results, fields) => {
        if (err) {
          callback(err);
        }
        return callback(null, results);
      }
    );
  },

  createRelay: (data, callback) => {
    db.query(
      `INSERT INTO controllers (relay1, relay2, relay3, relay4, deviceID) VALUES
      (?, ?, ?, ?, ?);`,
      [data.relay1, data.relay2, data.relay3, data.relay4, data.deviceID],
      (err, results, fields) => {

        if (err) {
          return callback(err);
        }

        return callback(null, results);
      }
    );
  },
};
