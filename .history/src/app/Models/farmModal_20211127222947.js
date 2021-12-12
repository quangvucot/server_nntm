const db = require("../../config/db");

module.exports = {
  // Đẩy dữ liệu từ cảm biến vào database
  createFarm: (farm, callback) => {
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
  getDataFarmByID: (userID, callback) => {
    db.query(
      `SELECT farmName, location,area,timeStart,timeFinish from farms where BIN_TO_UUID(farms.personID) = ?;`,
      [userID],
      (err, results, fields) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },
};
