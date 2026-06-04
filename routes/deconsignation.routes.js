const express = require("express");
const router = express.Router();

const {
  createDeconsignation,
  getAllDeconsignations,
} = require("../controllers/deconsignation.controller");

router.post("/", createDeconsignation);
router.get("/", getAllDeconsignations);

module.exports = router;
