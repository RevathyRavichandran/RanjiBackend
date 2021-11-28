const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/users", (req, res, next) => {
  User.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/user", (req, res, next) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.put("/user/:id", (req, res, next) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/user/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete("/user/:id", (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then((result) => {
      res.status(200).send({ success: "ok" });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
