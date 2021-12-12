const home = require("./homeRouter");
const login = require("./loginRouter");
const register = require("./registerRouter");
const sensor = require("./sensorDeviceRouter");
const Router = (app) => {

  app.use("/", home);
  app.use("/api", sensor);
  app.use("/api", login);
  app.use("/api", register);
};
module.exports = Router;
