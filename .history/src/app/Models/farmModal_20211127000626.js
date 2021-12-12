const db = require("../../config/db");

module.exports = {
  // Đẩy dữ liệu từ cảm biến vào database
  createNewFarm: (farm, callback) => {
    db.query(
      `INSERT INTO devices (personID, deviceID, treeID, farmName,location,area,timeStart,timeFinish) VALUES
        (?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        farm.personID,
        farm.deviceID,
        farm.treeID,
        farm.farmName,
        farm.location,
        farm.timeStart,
        farm.timeFinish,
      ],
      (err, results, fields) => {
        if (err) {
          callback(err);
        }
        return callback(null, results);
      }
    );
  },
};
