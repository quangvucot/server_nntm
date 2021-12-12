const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: function (req, res, next) {
    const token = req.get("auth-token");
    if (!token) {
      return res.status(401).send("Access Denied");
    } else {
      res.json({ status: 0, message: "Access Denied, Unauthorized user" });
    }
  },
};
