const Stickers = require("../models/stickerModel.js");
const mongoose = require('mongoose');
const User = require("../models/userModel.js");

// Get all stickers

const getCategoryStickers = async (req, res) => {
    const { category } = req.query;
    let query = {};

    if (category) {
        query.category = category;
    }
    try {
        const stickers = await Stickers.find(query).exec();
        return res.status(200).json({ stickers });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

// const fetchImages = async (req, res) => {
//     let allImages = [];
//     let nextCursor = null;
//     try {
//         do {
//             const options = {
//                 type: 'upload',
//                 prefix: 'popular/',
//                 max_results: 500,
//                 next_cursor: nextCursor,
//             };
//             const result = await Cloudinary.api.resources(options);
//             allImages = allImages.concat(result.resources);
//             nextCursor = result.next_cursor;
//         } while (nextCursor);

//         const insertedImages = [];
//         for (const image of allImages) {
//             const newSticker = new Stickers({
//                 name: "ministicker",
//                 category: "popular",
//                 imageUrl: image.secure_url,
//             });
//             const savedImage = await newSticker.save();
//             insertedImages.push(savedImage);
//         }

//         res.json({ images: insertedImages });
//     } catch (error) {
//         console.error("Error during database save:", error);
//         res.status(500).json({ error: "An error occurred during database save." });
//     }
// };

const updateSticker = async (req, res) => {
    const { sticker_Id } = req.params;
    const { size, price } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(sticker_Id)) {
            return res.status(400).json({ message: 'Invalid sticker id' });
        }

        // Update sticker size and price
        await Stickers.updateOne(
            { _id: new mongoose.Types.ObjectId(sticker_Id) },
            { $set: { size, price } }
        );
        // Check inserted size and price
        if (!size || !price) {
            return res.status(400).json({ message: 'Please enter size and price' });
        }
        // Fetch the updated sticker data
        const updatedStickerData = await Stickers.findById(sticker_Id);

        if (!updatedStickerData) {
            return res.status(400).json({ message: 'Sticker not found' });
        }
        return res.status(200).json({
            message: 'Sticker updated successfully',
            sticker: updatedStickerData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const postCustomData = async (req, res) => {
    try {
        const { imageUrl, price, size } = req.body;

        const newSticker = new Stickers({
            imageUrl: imageUrl,
            price,
            size
        });

        // Save the new sticker to the database
        await newSticker.save();

        res.status(201).json({ message: 'Custom sticker created successfully!', newSticker });
    } catch (error) {
        console.error('Error creating custom sticker:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    getCategoryStickers,
    updateSticker,
    postCustomData,
};