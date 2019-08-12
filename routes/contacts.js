const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Contact = require("../models/Contact");
const auth = require("../middleware/auth");

// @route---GET--api/contacts
// @desc---Get all user contacts
//@access---Private
router.get("/", auth, async (req, res) => {
  try {
    const contact = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
// @route---POST--api/contacts
// @desc---Add a contact
//@access---Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});
// @route---PUT--api/contacts/:id
// @desc---Update contact
//@access---Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});
// @route---DELETE--api/contacts/:id
// @desc---DELETE contact
//@access---Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});
module.exports = router;
