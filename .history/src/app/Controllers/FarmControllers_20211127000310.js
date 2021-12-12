class FarmController {
  home(req, res) {
    return res.render("Farm");
  }
}
module.exports = new FarmController();
