const express = require('express');
const router = express.Router();
const User = require('../models/userModel.js');

// Define your routes here
const { registerUser, loginUser, paymentInfo, getUserInfo, } = require('../controllers/useController.js');

const authenticateToken = require('../middleware/authenticateToken.js');

router.post('/register', registerUser);
router.post('/login', loginUser);

// get user info  
router.post('/paymentInfo', paymentInfo);

// protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully' });
});

// user info 
router.get('/get-user-info/:userId', authenticateToken, getUserInfo);

// admin route
router.get('/admin', async (req, res) => {
    try {
        const users = await User.find().select('-password'); 
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
