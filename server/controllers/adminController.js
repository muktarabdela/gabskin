const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const admin = require('../models/adminModal.js');
dotenv.config();

const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        // Find the user by ID and delete their information
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User information deleted successfully' });
    } catch (error) {
        console.error('Error deleting user information:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const adminLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password, " });
    }
    const user = await admin.findOne({ email, role: 'admin', isAdmin: true });

    if (!user) {
        return res.status(401).json({ message: "user not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = user.createJWT();
    res.status(200).json({ user: { id: admin._id, email: admin.email, isAdmin: user.isAdmin }, token });
});

// const adminRegister = asyncHandler(async (req, res) => {
//     const data = req.body
//     const { name, password, email } = req.body

//     const alreadyRegistered = await admin.findOne({ email: req.body.email });
//     if (alreadyRegistered) {
//         return res.status(400).json({ message: "email already exists" });
//     }
//     // check if password is strong enough and more than 6 characters
//     if (password.length < 6) {
//         return res.status(400).json({ message: "Password must be at least 6 characters long" });
//     }
//     // check password is strong enough
//     if (!password.match(/[a-z]/g)) {
//         return res.status(400).json({ message: "Password must contain at least one lowercase letter" });
//     }
//     if (!password.match(/[A-Z]/g)) {
//         return res.status(400).json({ message: "Password must contain at least one uppercase letter" });
//     }
//     if (!password.match(/[0-9]/g)) {
//         return res.status(400).json({ message: "Password must contain at least one number" });
//     }
//     if (!password.match(/[^a-zA-Z\d]/g)) {
//         return res.status(400).json({ message: "Password must contain at least one special character" });
//     }



//     const user = await admin.create(req.body);
//     console.log(user);
//     const token = user.createJWT();
//     // Create a new admin user
//     res.status(201).json({ user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin }, token });
//     res.status(201).json({ message: 'Admin registered successfully' });
// });

const updateProfile = async (req, res) => {
    try {
        const { currentPassword, newEmail, newPassword, confirmPassword } = req.body;
        const userId = req.user.userId;
        const user = await admin.findById(userId).maxTime(20000);
        if (!user) {
            return res.status(404).json({ success: false, error: 'admin not found' });
        }
        const existingUser = await admin.findOne({ email: newEmail });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'Email is already in use.' });
        }
        if (!newEmail) {
            return res.status(400).json({ success: false, error: 'new Email is required' });
        }
        if (!currentPassword) {
            return res.status(400).json({ success: false, error: 'Current password is required' });
        }
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            // Check if the current password is valid
            return res.status(400).json({ success: false, error: 'Invalid current password' });
        }
        if (!newPassword) {
            return res.status(400).json({ success: false, error: 'New password is required' });
        }

        // check new password is strong enough
        if (!newPassword.match(/[a-z]/g)) {
            return res.status(400).json({ error: "new Password must contain at least one lowercase letter" });
        }
        if (!newPassword.match(/[A-Z]/g)) {
            return res.status(400).json({ error: "new Password must contain at least one uppercase letter" });
        }
        if (!newPassword.match(/[0-9]/g)) {
            return res.status(400).json({ error: "new Password must contain at least one number" });
        }
        if (!newPassword.match(/[^a-zA-Z\d]/g)) {
            return res.status(400).json({ error: "new Password must contain at least one special character" });
        }
        if (!confirmPassword) {
            return res.status(400).json({ success: false, error: 'Confirm password is required' });
        }
        // Validate and update email
        if (newEmail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(newEmail)) {
                return res.status(400).json({ success: false, error: 'Invalid email format.' });
            }

        }
        user.password = newPassword;
        user.email = newEmail;

        // Save the updated user
        const updatedUser = await user.save();

        res.json({ success: true, user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

// create controller for getting all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { deleteUser, adminLogin, adminRegister, updateProfile, getUsers };