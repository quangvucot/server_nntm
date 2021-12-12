const express = require("express");
const db = require("../../config/db");
// const User = function (user) {
//   this.userName = user.userName;
//   this.password = user.password;
//   this.phoneNumber = user.phoneNumber;
// };

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
      `INSERT INTO user(userName, password, phoneNumber) VALUES (?, ?, ?)`,
      [data.userName, data.password, data.phoneNumber],
      (err, results, fields) => {
        if (err) {
          callback(err);
        }
        return callback(null, results);
      }
    );
  },

  getUserByUsername: (userName, callback) => {
    db.query(
      `SELECT * FROM user where userName = ?`,
      [userName],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getUserByUsername: (userName, callback) => {
    db.query(
      `SELECT * FROM user WHERE userName = ?`,
      [userName],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
