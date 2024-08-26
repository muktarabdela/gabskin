const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");

// Define your routes here
const {
	registerUser,
	loginUser,
	paymentInfo,
	getUserInfo,
} = require("../controllers/useController.js");

//import input validator
const { loginUserInputValidator, registerUserInputValidator } = require("../middleware/inputValidator.js");

const authMiddleware = require("../middleware/authenticateToken.js");

router.post("/register", registerUserInputValidator, registerUser);
router.post("/login", loginUserInputValidator, loginUser);

// get user info
router.post("/paymentInfo", authMiddleware.verifyToken, paymentInfo);

// protected route
router.get("/protected", authMiddleware.verifyToken, (req, res) => {
	res.json({ message: "Protected route accessed successfully" });
});

// user info
router.get("/get-user-info/", authMiddleware.verifyToken, getUserInfo);
module.exports = router;
