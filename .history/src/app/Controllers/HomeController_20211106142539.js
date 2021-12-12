class HomeController {
  home(req, res) {
    return res.send("Welcome To Server");
  }
}
module.exports = new HomeController();
