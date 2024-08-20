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


const adminRegister = asyncHandler(async (req, res) => {
    const data = req.body
    const alreadyRegistered = await admin.findOne({ email: req.body.email });
    if (alreadyRegistered) {
        return res.status(400).json({ message: "email already exists" });
    }
    const user = await admin.create(req.body);
    console.log(user);
    const token = user.createJWT();
    // Create a new admin user
    res.status(201).json({ user: { name: user.name, email: user.email, isAdmin: user.isAdmin }, token });
    res.status(201).json({ message: 'Admin registered successfully' });
});

const updateProfile = async (req, res) => {
    try {
        const { userId, currentPassword, newEmail, newPassword, confirmPassword } = req.body;

        const user = await User.findById(userId).maxTime(20000);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        const existingUser = await User.findOne({ email: newEmail });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'Email is already in use.' });
        }

        // Check if the current password is valid
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, error: 'Invalid current password' });
        }

        // Validate and update email
        if (newEmail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(newEmail)) {
                return res.status(400).json({ success: false, error: 'Invalid email format.' });
            }
            // Check if the email is already in use
            user.email = newEmail;
        }
        // Validate and update password
        if (newPassword && confirmPassword) {
            // Check if the new password and confirmation match
            if (newPassword !== confirmPassword) {
                return res.status(400).json({ success: false, error: 'New password and confirmation do not match' });
            }
            // Hash the new password
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
        }
        // Save the updated user
        const updatedUser = await user.save();

        res.json({ success: true, user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = { deleteUser, adminLogin, adminRegister, updateProfile };