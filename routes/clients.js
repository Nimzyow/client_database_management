const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Clients = require("../models/Clients");
const auth = require("../middleware/auth");

// @route   GET api/clients
//@Desc     GET all clients
//@access   Private

router.get("/", auth, async (req, res) => {
  try {
    const clients = await Clients.find().sort({
      date: -1
    });
    res.json(clients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route   POST api/clients
//@Desc     ADD new clients
//@access   Private

router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      phone,
      type,
      phone2,
      numberAndStreet,
      secondLineAdd,
      thirdLineAdd,
      postCode,
      proDes
    } = req.body;

    try {
      const newClient = new Clients({
        name,
        email,
        phone,
        type,
        numberAndStreet,
        secondLineAdd,
        thirdLineAdd,
        postCode,
        phone2,
        proDes
      });

      const client = await newClient.save();
      res.json(client);
    } catch (err) {
      console.error(err.message);
      res.statusMessage(500).send("Server Error");
    }
  }
);

// @route   PUT api/clients/:id
//@Desc     Update contact
//@access   Private

router.put("/:id", auth, async (req, res) => {
  const {
    name,
    email,
    phone,
    type,
    phone2,
    numberAndStreet,
    secondLineAdd,
    thirdLineAdd,
    postCode,
    proDes
  } = req.body;
  //Build cleint object

  const clientFields = {};
  if (name) clientFields.name = name;
  if (email) clientFields.email = email;
  if (phone) clientFields.phone = phone;
  if (phone2) clientFields.phone2 = phone2;
  if (type) clientFields.type = type;
  if (numberAndStreet) clientFields.numberAndStreet = numberAndStreet;
  if (secondLineAdd) clientFields.secondLineAdd = secondLineAdd;
  if (thirdLineAdd) clientFields.thirdLineAdd = thirdLineAdd;
  if (postCode) clientFields.postCode = postCode;
  if (proDes) clientFields.proDes = proDes;
  try {
    let client = await Clients.findById(req.params.id);
    if (!client) return res.status(404).json({ msg: "Contact not found" });

    client = await Clients.findByIdAndUpdate(
      req.params.id,
      {
        $set: clientFields
      },
      { new: true }
    );
    res.json(client);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/clients/:id
//@Desc     Delete contact
//@access   Private

router.delete("/:id", auth, async (req, res) => {
  try {
    let client = await Clients.findById(req.params.id);
    if (!client) return res.status(404).json({ msg: "Contact not found" });

    await Clients.findByIdAndRemove(req.params.id);
    res.json({ msg: "contact removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
