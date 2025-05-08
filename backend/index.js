const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
