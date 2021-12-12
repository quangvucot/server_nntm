const db = require("../../config/db");

module.exports = {
  // Đẩy dữ liệu từ cảm biến vào database
  createNewFarm: (users, callback) => {
    db.query(
      `SELECT farms.farmName, farms.location, farms.area, farms.timeStart,farms.timeFinish from farms INNER JOIN users ON farms.personID = users.?;`,
      [users.userID],
      (err, results, fields) => {
        if (err) {
          callback(err);
        }
        return callback(null, results);
      }
    );
  },

  getFramFromUserID: (userID, callback) => {
    db.query(
      `INSERT INTO devices (deviceID, treeID, farmName,location,area,timeStart,timeFinish) VALUES
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
