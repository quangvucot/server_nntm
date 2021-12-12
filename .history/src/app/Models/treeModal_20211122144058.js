const db = require("../../config/db");
module.exports = {
    // Đẩy dữ liệu từ cảm biến vào database
    createNewTree: (trees, callback) => {
        db.query(
            `INSERT INTO trees (processID, treeName) VALUES (?, ?);`,
            [
                trees.processID,
                trees.treeName,
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
    getAllTree: (callback) => {
        db.query(
            `SELECT * FROM trees`,
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
    getTreeByID: (deviceID, callback) => {
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
    updateTree: (data, callback) => {
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
    deleteTree: (data, callback) => {
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
