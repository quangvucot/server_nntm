require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});
connection.connect((err, connection) => {
  if (err) {
    console.log("Kết nối không thành công");
  } else {
    console.log("Kết nối thành công");
  }
});
module.exports = connection;
