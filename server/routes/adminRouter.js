const express = require('express');
const router = express.Router();
const { adminLogin, adminRegister, updateProfile, deleteUser } = require('../controllers/adminController.js');
const authMiddleware = require('../middleware/authenticateToken.js');



// Admin login route
router.post('/login', adminLogin);

// admin register route
router.post('/register', adminRegister);
router.put('/update-profile', authMiddleware.verifyToken, authMiddleware.checkAdmin, updateProfile);

router.delete('/delete/:userId', authMiddleware.verifyToken, authMiddleware.checkAdmin, deleteUser)


module.exports = router