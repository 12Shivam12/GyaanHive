const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, async() => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
});
