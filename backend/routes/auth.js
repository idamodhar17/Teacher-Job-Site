const express = require('express');
const { registerUser, loginUser, getMe } = require('../controllers/authControllers');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;