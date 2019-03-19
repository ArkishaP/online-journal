const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//@route POST api/posts
//@desc Create post
//@access Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const nrewJournal = new Journal({
      title: req.body.title,
      content: req.body.content,
      date: req.body.date
    });
    nrewJournal.save().then(post => res.json({ journal }));
  }
);

module.exports = router;
