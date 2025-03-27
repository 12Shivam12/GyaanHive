const express = require("express");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  // Password validation (at least 5 characters)
  if (password.length < 5) {
    return res
      .status(400)
      .json({ message: "Password should be at least 5 characters long" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  // Password validation (at least 5 characters)
  if (password.length < 5) {
    return res
      .status(400)
      .json({ message: "Password should be at least 5 characters long" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        message: "User logged in successfully",
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, login };
