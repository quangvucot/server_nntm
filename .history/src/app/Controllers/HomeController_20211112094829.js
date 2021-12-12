class HomeController {
  home(req, res) {
    const directory = {
      User: "Đăng nhập đăng ký",
      Login: "http://159.223.56.85/api/auth/login",
      Register: "http://159.223.56.85/api/auth/register",
      SensorsPost: "http://159.223.56.85/api/sensors/",
      SensorsGet: "http://159.223.56.85/api/getAllsensors",
    };
    return res.send(directory);
  }
}
module.exports = new HomeController();
