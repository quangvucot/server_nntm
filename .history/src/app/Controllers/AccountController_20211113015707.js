const db = require("../../config/db");
const bcryptjs = require("bcryptjs");
const User = require("../Models/userModal");
const UserModal = require("../Models/userModal");
const { create } = require("../Models/userModal");
const { sign } = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const schema = require("../../routers/registerRouter");

class AccountController {
  login(req, res, next) {
    const body = req.body;
    User.getUserByUsername(body.userName, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
      const result = bcryptjs.compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const token = sign({ result: results }, "qwenntm", {
          expiresIn: "1h",
        });
        return res.json({ success: 1, message: "Login Success", token: token });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  }

  // createNewUser(req, res, next) {
  //   bcryptjs.genSalt(10, function (err, salt) {
  //     bcryptjs.hash(req.body.password, salt, function (err, hash) {
  //       console.log("data", req.body);
  //       const userReqData = new User(req.body);
  //       userReqData.password = hash;
  //       if (
  //         req.body.constructor === Object &&
  //         Object.keys(req.body).length === 0
  //       ) {
  //         res.send(400).send({ success: false, message: "Please fill" });
  //       } else {
  //         User.createNewUser(userReqData, (err, user, valid) => {
  //           if (err) res.send(err);
  //           if (valid) {
  //             console.log("sdfsdfsdfs");
  //           } else {
  //             res.json({
  //               status: true,
  //               message: "Created successfully",
  //               data: user,
  //             });
  //           }
  //         });
  //       }
  //     });
  //   });
  // }

  async register(req, res, next) {
    const validation = schema.validate(req.body, schema);
    res.send(validation);
    // const body = req.body;
    // const salt = bcryptjs.genSaltSync(10);
    // body.password = bcryptjs.hashSync(body.password, salt);
    // create(body, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).json({
    //       success: 0,
    //       message: "Database connection error",
    //     });
    //   }
    //   return res.status(200).json({ success: 1, data: results });
    // });
  }
}

module.exports = new AccountController();
