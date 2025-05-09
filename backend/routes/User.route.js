const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/User.controller");
const multer = require("multer");
const upload = multer();

router.post("/register", upload.none(), registerUser);
router.post("/login", upload.none(), loginUser);

module.exports = router;
