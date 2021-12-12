class HomeController {
  home(req, res) {
    const directory = {
      User: "Đăng nhập đăng ký",
      Login: "http://209.97.165.72/api/auth/login",
      Register: "http://209.97.165.72/api/auth/register",
      SensorsPost: "http://209.97.165.72/api/sensors/",
      SensorsGet: "http://209.97.165.72/api/getAllSensors/",
    };
    return res.send(directory);
  }
}
module.exports = new HomeController();
