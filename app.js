const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


// middleware
app.use(express.json());
app.use(cors());

//routes
const productRoute = require("./routes/v1/product.route");

app.use("/api/v1/product", productRoute);

// query






app.get("/", (req, res) => {
  console.log(`server running?`)
});

// posting to database
app.post("/api/v1/product");

app.get("/api/v1/product");


module.exports = app;
