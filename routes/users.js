const express = require("express");
const router = express.Router();

// @route   POST api/users
//@Desc     Register a user
//@access   Public

router.post("/", (req, res) => res.send("register a user"));

module.exports = router;
