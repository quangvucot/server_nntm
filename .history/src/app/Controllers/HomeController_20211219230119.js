const connectionFire = require("../../config/firebase");
class HomeController {
  home(req, res) {
    connectionFire("Test Notification", "Cảnh Báo");
    return res.render("home");
  }
}
module.exports = new HomeController();
