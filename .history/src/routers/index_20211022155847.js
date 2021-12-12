const home = require("./homeRouter");
const login = require("./loginRouter");
const register = require("./registerRouter");
const Router = (app) => {
  app.use("/api", home);
  app.use("/api", login);
  app.use("/api", register);
};
module.exports = Router;
