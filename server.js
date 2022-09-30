const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app");

// database connection
mongoose.connect("mongodb://localhost:27017/acc").then(() => {
  console.log(`Database connection is successful`);
})

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

