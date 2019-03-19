const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const passport = require("passport");
const users = require("./routes/api/users");
const calendar = require("./routes/api/calendar");
//const journal = require("./routes/api/journal");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

//use Routes
app.use("/api/users", users);
app.use("/api/calendar", calendar);
//app.use("/api/journal", journal);

app.listen(5000, () => console.log("Server running on port 5000"));
