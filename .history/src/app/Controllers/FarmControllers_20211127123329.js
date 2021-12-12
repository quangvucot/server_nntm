class FarmController {
  createNewFarm(req, res) {
    return res.render("Farm");
  }
  getFarmByUserID(req, res) {
    return res.render("getFarmByUserID");
  }
}
module.exports = new FarmController();
