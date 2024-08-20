const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const userSchema = new mongoose.Schema({
    name: {
        required: [true, "Name is required"],
        type: String,
        maxlength: 50,
    },
    email: {
        type: String, required: [true, "Email is required"], match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
    },
    phone: {
        required: [true, "Phone number is required"],
        type: String,
        maxlength: 15,
    },
    password: { type: String, required: [true, "Password is required"] },

    totalPrice: {
        type: Number,
    },
    role: {
        type: String,
        default: 'user',
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    deliveryInfo: {
        firstName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false,
        },
        phone: {
            type: String,
            required: false,
        },
        subCity: {
            type: String,
            enum: ['Addis Ketema', 'Akaky Kaliti', 'Arada', 'Bole', 'Gullele', 'Kiros', 'Kolfie Keranio', 'Lideta', 'Nifas Silk-Lafto', 'Yeka', 'Lemi Kura'],
            required: false,
        },
        deliveryLocation: {
            type: String,
            required: false,
        },
    },
    orders: [
        {
            stickers: [
                {
                    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Sticker' },
                    price: Number,
                    size: String,
                    quantity: Number,
                    category: String,
                    imageUrl: String,
                },
            ],
        }
    ],
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending',
    },
    paymentMethod: {
        type: String,
        enum: ['Telebirr', 'CBE', 'BOA'],
    },
    deliveryStatus: {
        type: String,
        enum: ['pending', 'in progress', 'Delivered', 'Failed'],
        default: 'pending',
    },
    receiptScreenshot: {
        type: String,
    },
});
// Pre-save hook to hash the password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to create a JWT
userSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id, role: this.role, email: this.email }, process.env.JWT_SECRET, {
        expiresIn: '10d',
    });
}

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
