const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/user.routes.js");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

// middleware
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
});


// routes
app.get("/", (req, res) => {
  return res.send("Base Api is working")
});

app.use("/api/auth", authRoutes);
