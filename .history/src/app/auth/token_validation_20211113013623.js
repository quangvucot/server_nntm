const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: function (req, res, next) {
    let token = req.get("authorization");
    if (token) {
      toke = token.slice(7);
      verify(token, "qwenntm", (err, decoded) => {
        if (err) {
          res.json({ success: 0, message: "Invalid token" });
        } else {
          next();
        }
      });
    } else {
      res.json({ status: 0, message: "Access Denied, Unauthorized user" });
    }
  },
};
