const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  const file = path.join(__dirname, "..", "public", "instructions.html");
  res.sendFile(file);
});
/* GET users listing. */

module.exports = router;
