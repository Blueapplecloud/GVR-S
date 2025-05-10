// placement.routes.js
const express = require("express");
const upload = require("../config/multerConfig.js");
const router = express.Router();

const {  getAllPlacements,
  createPlacement,
  updatePlacement,
  deletePlacement,} = require("../controllers/Placement.controller.js");
  
router.get("/all", getAllPlacements);
router.post("/create", upload.single("image"), createPlacement);
router.put("/update/:id", upload.single("image"), updatePlacement);
router.delete("/delete/:id", deletePlacement);

module.exports = router;
