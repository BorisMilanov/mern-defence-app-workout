const express = require('express');

const {loginUser, signupUser} = require('../controllers/userController');
const {profile} = require('../controllers/profileController')
const router = express.Router();

router.post('/login',loginUser);

router.post('/signup',signupUser);

router.get('/profile',profile)

module.exports = router;