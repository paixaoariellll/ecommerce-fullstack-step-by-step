const express = require("express");
const { mongoose, connect } = require("mongoose");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server running");
});

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "ecommerce",
  });
  console.log("Connected to db");
}

connectDb().catch((err) => {
  console.error(err);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
