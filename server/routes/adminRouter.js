const express = require("express");
const router = express.Router();
const {
	adminLogin,
	// adminRegister,
	updateProfile,
	deleteUser,
	getUsers,
	updatePaymentStatus,
	updateDeliveryStatus,
} = require("../controllers/adminController.js");
const authMiddleware = require("../middleware/authenticateToken.js");
// import rate limiter
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
	adminLoginInputValidator,
	rateLimitter,
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

router.put('/update-payment-status/:userId', authMiddleware.verifyToken, authMiddleware.checkAdmin, updatePaymentStatus);
router.put('/update-delivery-status/:userId', authMiddleware.verifyToken, authMiddleware.checkAdmin, updateDeliveryStatus);



module.exports = router