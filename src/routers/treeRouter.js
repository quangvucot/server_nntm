const express = require("express");
const router = express.Router();
const TreeController = require("../../src/app/Controllers/TreeController");

// Thêm cây trồng
router.post("/tree", TreeController.addNewTree);
// Lấy tất cả cây trồng
router.get("/tree", TreeController.getAllTree);
// Update cây trồng
router.put("/tree/update", TreeController.updateTree);
// Xóa cây trồng
router.delete("/tree:id", TreeController.deleteTree);
module.exports = router;