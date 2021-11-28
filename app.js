const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const path = require("path");
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://revathy-ravichandran:meenuswathi@cluster0.wnu1h.mongodb.net/ranjipro?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB connected successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", userRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

module.exports = app;
