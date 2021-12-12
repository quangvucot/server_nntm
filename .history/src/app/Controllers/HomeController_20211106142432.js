class HomeController {
  home(req, res) {
    return res.send("Welcome To Serverl");
  }
}
module.exports = new HomeController();
