const mongoose = require('mongoose');

const stickerSchema = new mongoose.Schema({
    name: String,
    category: {
        type: String,
        default: 'custom',
    },
    package: {
        type: String
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'large', 'half_package', 'regular_full_package', 'premium', 'Special_Full_package'],
    },
    price: Number,
    imageUrl: String,
    code: String
});

const Stickers = mongoose.model('Stickers', stickerSchema);

module.exports = Stickers;
