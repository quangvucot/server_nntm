const db = require("../../config/db");

module.exports = {
  // Đẩy dữ liệu từ cảm biến vào database
  createDataSensor: (sensorData, callback) => {
    const query = `INSERT INTO devices (temperature, humidity, soidHumidity,soidPH,lightIntensity) SELECT * FROM (SELECT ?,?,?,?,?) 
    AS tmp WHERE NOT EXISTS (SELECT temperature, humidity,soidHumidity,soidPH,lightIntensity FROM devices WHERE 
      username = ${sensorData.temperature} AND humidity = ${sensorData.humidity} AND soidPH = ${sensorData.soidPH} AND soidHumidity = ${sensorData.soidHumidity} AND lightIntensity = ${sensorData.lightIntensity} AND username = ${sensorData.temperature}) LIMIT 1;`;
    db.query(
      query,
      [
        sensorData.temperature,
        sensorData.humidity,
        sensorData.soidHumidity,
        sensorData.soidPH,
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
};
