//import validator module for input validation
const validator = require("validator");

// Function to check if password meets criteria
function validatePassword(password) {
	const minLength = 8;
	const hasUpperCase = /[A-Z]/.test(password);
	const hasLowerCase = /[a-z]/.test(password);
	const hasNumber = /\d/.test(password);
	const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

	return {
		isValid:
			password.length >= minLength &&
			hasUpperCase &&
			hasLowerCase &&
			hasNumber &&
			hasSpecialChar,
		criteria: {
			minLength: password.length >= minLength,
			hasUpperCase,
			hasLowerCase,
			hasNumber,
			hasSpecialChar,
		},
	};
}

// const userRegisterInputValidation = async (req, res, next) => {
// 	const {
// 		name,
// 		email,
// 		phone,
// 		password,
// 		confirmPassword,
// 		totalPrice,
// 		deliveryInfo,
// 		orders,
// 	} = req.body;
// 	if (
// 		!name ||
// 		!email ||
// 		!phone ||
// 		!password ||
// 		!confirmPassword ||
// 		!totalPrice ||
// 		!deliveryInfo ||
// 		!orders
// 	) {
// 		return res.status(400).send({
// 			message: "All fields are required",
// 			status: false,
// 		});
// 	}

// 	//Validate email
// 	if (!validator.isEmail(email)) {
// 		return res.status(400).send({
// 			message: "Email is not valid",
// 			status: false,
// 		});
// 	}

// 	//Validate phone number
// 	if (!validator.isMobilePhone(phone) || phone.length !== 10) {
// 		return {
// 			message: `Phone number have to be valid and 10 digit number`,
// 			status: false,
// 		};
// 	}

// 	//Check if password and confirm password is equal
// 	if (password !== confirmPassword) {
// 		return {
// 			message: "Password confirmation do not match",
// 			status: false,
// 		};
// 	}

// 	if (isNaN(totalPrice)) {
// 		return {
// 			message: "price have to be number",
// 			status: false,
// 		};
// 	}
// };

//admin login input validator
const adminLoginInputValidator = async (req, res, next) => {
	const { email, password } = req.body;
	if (!email) {
		return res.status(400).json({ success: false, error: "Email is required" });
	}

	if (!validator.isEmail(email)) {
		return res
			.status(400)
			.json({ success: false, error: "Email is not valid" });
	}
	next();
};

// upadte profile input validator
const updateProfileInputValidator = async (req, res, next) => {
	const { currentPassword, newEmail, newPassword, confirmPassword } = req.body;

	if (!newEmail) {
		return res
			.status(400)
			.json({ success: false, error: "New email is required" });
	}
	if (!currentPassword) {
		return res
			.status(400)
			.json({ success: false, error: "Current password is required" });
	}

	if (!newPassword) {
		return res
			.status(400)
			.json({ success: false, error: "New password is required" });
	}

	if (!confirmPassword) {
		return res
			.status(400)
			.json({ success: false, error: "Confirm password is required" });
	}

	//validate email
	if (!validator.isEmail(newEmail)) {
		return res
			.status(400)
			.json({ success: false, error: "Invalid email format" });
	}

	if (newPassword !== confirmPassword) {
		return res
			.status(400)
			.json({ success: false, error: "Password confirmation is not match" });
	}

	const isPasswordValid = validatePassword(newPassword);
	if (!isPasswordValid) {
		return res
			.status(400)
			.json({ success: false, error: "Password must to be strong" });
	}

	next();
};

// user input validator
const registerUserInputValidator = async (req, res, next) => {
	const {
		name,
		email,
		phone,
		password,
		confirmPassword,
		totalPrice,
		deliveryInfo,
		orders,
	} = req.body;

	// Check required fields
	if (!name) return res.status(400).json({ success: false, error: "Name is required" });
	if (!email) return res.status(400).json({ success: false, error: "Email is required" });
	if (!phone) return res.status(400).json({ success: false, error: "Phone number is required" });
	if (!password) return res.status(400).json({ success: false, error: "Password is required" });
	if (!confirmPassword) return res.status(400).json({ success: false, error: "Confirm password is required" });
	if (!totalPrice) return res.status(400).json({ success: false, error: "Total price is required" });
	if (!deliveryInfo.firstName) return res.status(400).json({ success: false, error: "First name is required" });
	if (!deliveryInfo.lastName) return res.status(400).json({ success: false, error: "Last name is required" });
	if (!deliveryInfo.phone) return res.status(400).json({ success: false, error: "Phone number is required" });
	if (!deliveryInfo.subCity) return res.status(400).json({ success: false, error: "Sub city is required" });
	if (!deliveryInfo.deliveryLocation) return res.status(400).json({ success: false, error: "Delivery location is required" });

	// Define valid prices based on name and size
	const validPrices = {
		ministicker: { large: 60, medium: 50, small: 40 },
		laptopskin: {
			"half_package": 350,
			"regular_full_package": 600,
			"Special_Full_package": 800,
			Premium: 1000
		},
	};

	// Validate each sticker's price
	for (const order of orders) {
		for (const sticker of order.stickers) {
			console.log(sticker);
			const { name, size, price } = sticker;
			const validPrice = validPrices[name]?.[size];

			if (!validPrice || validPrice !== price) {
				return res.status(400).json({
					success: false,
					error: `Invalid price for ${name} (${size}). Expected: ${validPrice}, Received: ${price}`
				});
			}
		}
	}

	next();
};


// user login validator
const loginUserInputValidator = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email) {
		return res.status(400).json({ success: false, error: "Email is required" });
	}

	if (!password) {
		return res
			.status(400)
			.json({ success: false, error: "Password is required" });
	}

	if (!validator.isEmail(email)) {
		return res
			.status(400)
			.json({ success: false, error: "Email is not valid" });
	}
};

// user payment input validator
const paymentInfoUserInputValidator = async (req, res, next) => {
	const { paymentStatus, paymentMethod, receiptScreenshot } = req.body;

}

module.exports = {
	adminLoginInputValidator,
	updateProfileInputValidator,
	loginUserInputValidator,
	paymentInfoUserInputValidator,
	registerUserInputValidator
};
