const express = require("express");
require("dotenv").config();
const UserRoute = require("./routes/User.route");
const cors = require("cors");

const connectToDB = require("./DB/connectToDB");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", UserRoute);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  await connectToDB();
  console.log("Server is running on port " + port);
});
