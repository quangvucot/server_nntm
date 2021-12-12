const db = require("../../config/db");

module.exports = {
  // Đẩy dữ liệu từ cảm biến vào database
  createDataSensor: (sensorData, callback) => {
    db.query(
      `INSERT INTO device(temperature, humidity, soidHumidity, soilPH, lightIntensity) VALUES (?,?,?,?,?)`,
      [sensorData],
      (err, results) => {
        if (err) {
          callback(err);
        }
        return callback(null, results);
      }
    );
  },

  // Lấy tất cả thông tin database ra json
  getDataSensor: (data, callback) => {
    db.query(`SELECT * FROM devices`, [data], (err, results) => {
      if (err) {
        return callback(err);
      }
      return callback(null, results);
    });
  },

  // Lấy dữ liệu sensor thông qua ID Thiết bị
  getDataSensorById: {},

  // Cập nhật dữ liệu vào Database
  updateDataSensor: {},

  // Xóa dữ liệu database
  deleteDataSensor: {},
};
