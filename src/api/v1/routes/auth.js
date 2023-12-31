const express = require('express');
const router = express.Router();

const { signUp, signIn, getMe } = require('../controllers/auth');

router.post('/signup', signUp);
router.post('/login', signIn);
router.get('/me', getMe);

module.exports = router;