const { getDataFarmByID, createFarm } = require("../Models/farmModal");

class FarmController {
  createNewFarm(req, res) {
    const farm = req.body;
    console.log(farm);
    try {
      createFarm(farm, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Lỗi kết nối cơ sở dữ liệu",
          });
        }
        return res.status(200).json({ success: 1, data: results });
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
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
