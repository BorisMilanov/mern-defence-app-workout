const express = require('express');
const router = express.Router();
const Post = require('../models/postModel')

router.post('/posts', async (req, res) => {
  try {
    const { title, reps, sets, calories } = req.body;

    console.log(title);
    // Validate data

    // Save to database
    const post = new Post({ title, reps, sets, calories });
    await post.save();
    res.status(201).json({ message: 'Post added successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
