const express = require('express');
const router = express.Router();
const Post = require('../models/postModel')

router.post('/api/posts', async (req, res) => {
  try {
    const { postTitle, postContent } = req.body;
    console.log(title);
    // Validate data
   
    // Save to database
    const post = new Post({ postTitle, postContent });
    await post.save();
    res.status(201).json({ message: 'Post added successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
