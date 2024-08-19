const express = require('express');
const router = express.Router();
const { adminLogin, adminRegister, updateProfile, deleteUser } = require('../controllers/adminController.js');



// Admin login route
router.post('/login', adminLogin);

// admin register route
router.post('/register', adminRegister);
router.put('/update-profile', updateProfile);

router.delete('/delete/:userId', deleteUser)


module.exports = router