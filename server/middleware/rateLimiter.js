const setRateLimit = require("express-rate-limit");

// Rate limit middleware
const rateLimitter = setRateLimit({
	windowMs: 60 * 3000,
	max: 10,
	message: (req, res) => {
		return res.status(400).send({
			message: "To many attempts please try again later",
			status: false,
		});
	},
	headers: true,
	keyGenerator: (req) => req.body.email,
});

module.exports = rateLimitter;
