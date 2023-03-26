const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        require: true,
        
    },
    reps: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Post', PostSchema);