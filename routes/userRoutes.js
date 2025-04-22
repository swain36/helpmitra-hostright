const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST new user
router.post('/add', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User added", user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
      const userExists = await User.findOne({ email });
      if (userExists) return res.status(400).json({ message: "User already exists" });

      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json({ message: "Signup successful" });
  } catch (err) {
      res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
          return res.status(401).json({ message: "Invalid email or password" });
      }

      res.status(200).json({ message: "Login successful" });
  } catch (err) {
      res.status(500).json({ message: "Login failed", error: err.message });
  }
});

module.exports = router;
