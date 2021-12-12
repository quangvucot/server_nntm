const db = require("../../config/db");

module.exports = {
  // Đẩy dữ liệu từ cảm biến vào database
  createFarm: (farms, callback) => {
    db.query(
      `INSERT INTO farms (personID, deviceID, treeID, farmName,location,area,timeStart,timeFinish) VALUES
        (UUID_TO_BIN(?), ?, ?, ?, ?, ?, ?, ?);`,
      [
        farms.personID,
        farms.deviceID,
        farms.treeID,
        farms.farmsName,
        farms.location,
        farms.area,
        farms.timeStart,
        farms.timeFinish,
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
      `SET FOREIGN_KEY_CHECKS=0; SELECT farmName, location,area,timeStart,timeFinish from farms where BIN_TO_UUID(farms.personID) = ?; SET FOREIGN_KEY_CHECKS=1;`,
      [userID],
      (err, results, fields) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },
  deleteFarmByID: (farmID, callback) => {
    db.query(
      `DELETE FROM farms WHERE farmID = ?`,
      [farmID],
      (err, results, fields) => {
        if (err) {
          callback(err);
        }
        return callback(null, results);
      }
    );
  },
};
