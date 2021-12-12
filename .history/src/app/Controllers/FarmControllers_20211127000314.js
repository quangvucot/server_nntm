class FarmController {
  createNewFarm(req, res) {
    return res.render("Farm");
  }
}
module.exports = new FarmController();
