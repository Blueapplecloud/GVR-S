// 1.All imports Here
const express = require("express");
require("dotenv").config();
const UserRoute = require("./routes/User.route");
const cors = require("cors");

const connectToDB = require("./DB/connectToDB");
const PlacementRoutes = require("./routes/Placement.route");

// 2. Configurations
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2.1. Middleware file upload
// Serve static files from the "uploads" directory
app.use("/uploads", express.static("uploads"));

// 3. All Routes Here
app.use("/users", UserRoute);
app.use("/placement", PlacementRoutes);


// 4. server configuration
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  await connectToDB();
  console.log("Server is running on port " + port);
});
