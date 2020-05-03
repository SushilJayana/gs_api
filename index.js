const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

app.use(express.json());

dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use(cors({ origin: "*" }));

//Route Middleware
require("./routes")(app);

app.listen(3005, () => {
  console.log("Connected gymsquare api at 3005");
});
