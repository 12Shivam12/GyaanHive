const express = require("express");
const { signup, login } = require("../controllers/user.controller.js");

const router = express.Router();

router.post("/register", signup);
router.post("/login", login);

module.exports = router;
