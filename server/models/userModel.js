const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        maxlength: 15,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
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

const User = mongoose.model('User', userSchema);

module.exports = User;
