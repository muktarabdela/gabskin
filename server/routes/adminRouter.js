const express = require('express');
const router = express.Router();
const { adminLogin, adminRegister, updateProfile, deleteUser, getUsers } = require('../controllers/adminController.js');
const authMiddleware = require('../middleware/authenticateToken.js');
const User = require('../models/userModel.js');



// Admin login route
router.post('/login', adminLogin);

// admin register route
router.post('/register', adminRegister);
router.put('/update-profile', authMiddleware.verifyToken, authMiddleware.checkAdmin, updateProfile);

router.delete('/delete/:userId', authMiddleware.verifyToken, authMiddleware.checkAdmin, deleteUser)

// admin route
router.get('/all-users', authMiddleware.verifyToken, authMiddleware.checkAdmin, getUsers);


module.exports = router