const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
var API_URL = "/gsapi";

//Import routes
// const tokenRoutes = require("./jwt/generateToken");
// const memberRoutes = require("./routes/r_member");
// const packageRoutes = require("./routes/r_package");
// const loginRoutes = require("./routes/r_login");

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
// app.use("/api/gs", tokenRoutes);
// app.use("/api/gs", loginRoutes);
// app.use("/api/gs", memberRoutes);
// app.use("/api/gs", packageRoutes);

app.listen(3005, () => {
  console.log("Connected gymsquare api at 3005");
});
