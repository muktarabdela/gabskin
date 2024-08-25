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

const userRegisterInputValidation = async (req, res, next) => {
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
	if (
		!name ||
		!email ||
		!phone ||
		!password ||
		!confirmPassword ||
		!totalPrice ||
		!deliveryInfo ||
		!orders
	) {
		return res.status(400).send({
			message: "All fields are required",
			status: false,
		});
	}

	//Validate email
	if (!validator.isEmail(email)) {
		return res.status(400).send({
			message: "Email is not valid",
			status: false,
		});
	}

	//Validate phone number
	if (!validator.isMobilePhone(phone) || phone.length !== 10) {
		return {
			message: `Phone number have to be valid and 10 digit number`,
			status: false,
		};
	}

	//Check if password and confirm password is equal
	if (password !== confirmPassword) {
		return {
			message: "Password confirmation do not match",
			status: false,
		};
	}

	if (isNaN(totalPrice)) {
		return {
			message: "price have to be number",
			status: false,
		};
	}
};

module.exports = {};
