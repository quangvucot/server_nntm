const { getDataFarmByID } = require("../Models/farmModal");

class FarmController {
  createNewFarm(req, res) {
    return res.render("Farm");
  }

  getAllFarmByUserID(req, res) {
    const userID = req.params.userID;
    getDataFarmByID(userID, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({ success: 0, message: "Không tìm thấy" });
      }
      return res.json({ success: 1, data: results });
    });
  }

}
module.exports = new FarmController();
