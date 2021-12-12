const db = require("../../config/db");
const { createNewTree, getAllTree } = require("../Models/treeModal");

class TreeController {

    addNewTree(req, res, next) {
        const tree = req.body;
        createNewTree(tree, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Lỗi kết nối cơ sở dữ liệu",
                });
            }
            return res.status(200).json({ success: 1, data: results });
        })
    }

    getAllTree(req, res, next) {
        getAllTree((err, results) => {
            if (err) {
                return res.json({ success: 0, message: err.message });
            }
            return res.json({ data: results });
        });
    }

    deleteTree(req, res, next) {
        return res.send("Xóa cây trồng");
    }

    updateTree(req, res, next) {
        return res.send("Cập nhật cây trồng");
    }
}
module.exports = new TreeController();