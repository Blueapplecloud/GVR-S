const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  validateUser,
} = require("../controllers/User.controller");
const multer = require("multer");
const upload = multer();

router.post("/register", upload.none(), registerUser);
router.post("/login", upload.none(), loginUser);
router.post("/validate", upload.none(), validateUser);

module.exports = router;
