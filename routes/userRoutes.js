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

module.exports = router;
