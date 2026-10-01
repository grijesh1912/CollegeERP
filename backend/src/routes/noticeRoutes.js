const express = require("express");
const router = express.Router();

const {
  getNotices,
  createNotice,
} = require("../controllers/noticeController");

router.get("/", getNotices);
router.post("/", createNotice);

module.exports = router;