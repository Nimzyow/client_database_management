const express = require("express");
const router = express.Router();

// @route   GET api/clients
//@Desc     GET all clients
//@access   Private

router.get("/", (req, res) => res.send("Get all contacts"));

// @route   POST api/clients
//@Desc     ADD new clients
//@access   Private

router.post("/", (req, res) => res.send("Add clients"));

// @route   PUT api/clients/:id
//@Desc     Update contact
//@access   Private

router.put("/:id", (req, res) => res.send("Update client"));

// @route   DELETE api/clients/:id
//@Desc     Delete contact
//@access   Private

router.delete("/:id", (req, res) => res.send("Delete client"));

module.exports = router;
