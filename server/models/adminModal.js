const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

// Define the User schema
const adminSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name is required"] },
    email: {
        type: String, required: [true, "Email is required"], match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
    },
    password: { type: String, required: [true, "Password is required"] },
    role: { type: String, default: 'admin' },
    isAdmin: {
        type: Boolean,
        default: true,
    },
});

// Pre-save hook to hash the password before saving
adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to create a JWT
adminSchema.methods.createJWT = function () {
    return jwt.sign({ name: this.name, role: this.role, email: this.email, isAdmin: this.isAdmin }, process.env.JWT_SECRET, {
        expiresIn: '2d',
    });
}

// Method to compare passwords
adminSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

const admin = mongoose.model("admin", adminSchema);
module.exports = admin;
