const express = require("express");
const router = express.Router();
const {
	adminLogin,
	// adminRegister,
	updateProfile,
	deleteUser,
	getUsers,
} = require("../controllers/adminController.js");
const authMiddleware = require("../middleware/authenticateToken.js");
const User = require("../models/userModel.js");
//import rate limiter
const rateLimitter = require("../middleware/rateLimiter.js");

//import input validator
const {
	adminLoginInputValidator,
	updateProfileInputValidator,
} = require("../middleware/inputValidator.js");

// admin register route
// router.post('/register', adminRegister);

// Admin login route
router.post("/login",
	// adminLoginInputValidator,  
	// rateLimitter,
	adminLogin
);


router.put(
	"/update-profile",
	updateProfileInputValidator,
	[authMiddleware.verifyToken, authMiddleware.checkAdmin],
	updateProfile
);

// admin route
router.get(
	"/all-users",
	[authMiddleware.verifyToken, authMiddleware.checkAdmin],
	getUsers
);

router.delete(
	"/delete/:userId",
	[authMiddleware.verifyToken, authMiddleware.checkAdmin],
	deleteUser
);



module.exports = router;
