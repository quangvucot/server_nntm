const express = require("express");
const db = require("../../config/db");

// User.createNewUser = function (userReqData, result) {
//   db.query(
//     "SELECT * FROM user WHERE LOWER(userName) = ?",
//     userReqData.userName,
//     function (err, user) {
//       if (err) return console.log(err);
//       if (!user.length) {
//         db.query("INSERT INTO user SET ? ", userReqData, (err, res) => {
//           if (err) {
//             console.error("Error while insert user");
//             result(null, err);
//           } else {
//             console.log("Thêm thành công");
//             result(null, res);
//           }
//         });
//       } else {
//         db.end();
//         result(null, { message: "Username is exist" });
//       }
//     }
//   );
// };
module.exports = {
  create: (data, callback) => {
    db.query(
      `INSERT INTO users (username, password, phoneNumber) VALUES (?,?,?);`,
      [data.username, data.password, data.phoneNumber],
      (err, results, fields) => {
        if (err) {
          callback(err);
        }
        return callback(null, results);
      }
    );
  },
  loginByUser: (username, callback) => {
    db.query(
      `SELECT * FROM users WHERE username = ?`,
      [username],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getUserByUsername: (username, callback) => {
    db.query(
      `SELECT * FROM user where username = ?`,
      [username],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getAllUsers: (callback) => {
    db.query(
      `SELECT BIN_TO_UUID(userID), username, password, phoneNumber FROM users`,
      [],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },
};
