require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const postRoutes = require('./routes/testRoute')

const Post = require('./models/postModel')

const app = express();
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    next();
});
app.use('/api/user',userRoutes)
//
app.post('/posts', async (req, res) => {
  try {
    const {title,reps} = req.body;
    console.log(title);
    // Validate data
   
    // Save to database
    const post = new Post({title,reps});
    await post.save();
    res.status(201).json({ message: 'Post added successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(4000, () => {
            console.log('connected to db & listening on port')
            console.log(`The app is running on http://localhost:4000/`)
        })
    })
    .catch((error) => {
        console.log(error)
 })