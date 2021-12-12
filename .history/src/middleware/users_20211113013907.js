const Joi = require("@hapi/joi");

const schema = {
  username: Joi.string().min(6).required,
  password: Joi.string().min(6).required,
};
module.exports = {
  // validateRegister: (req, res, next) => {
  //   if (!req.body.userName || req.body.userName.length < 3) {
  //     console.log("req.body.userName" + req.body.userName);
  //     return res.status(400).send({
  //       message: "Username phải trên 3 kí tự",
  //     });
  //   }
  //   if (!req.body.password || req.body.password.length < 8) {
  //     return res.status(400).send({
  //       message: "Password phải trên 8 kí tự",
  //     });
  //   }
  //   if (!req.body.phoneNumber || req.body.phoneNumber.length < 5) {
  //     return res.status(400).send({
  //       message: "phoneNumber phải trên 5 kí tự",
  //     });
  //   }
  //   next();
  // },
  // isLogedIn: () => {},
};
