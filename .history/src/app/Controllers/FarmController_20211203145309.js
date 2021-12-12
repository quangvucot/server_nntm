const {
  getDataFarmByID,
  createFarm,
  deleteFarmByID,
} = require("../Models/farmModal");

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
        return res.status(200).json({ success: 1, data: results.data });
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
  deleteFarm(req, res) {
    const farmID = req.body.farmID;
    console.log(farmID);
    deleteFarmByID(farmID, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({ success: 0, message: "Not Found" });
      }
      return res.json({ success: 1, message: "Delete Successfully" });
    });
  }
}
module.exports = new FarmController();
