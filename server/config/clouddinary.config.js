const { v2: Cloudinary } = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();
Cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadToCloudinary = async (file, folder) => {
    const res = await Cloudinary.uploader.upload(file, { folder });
    return res.secure_url;
}

module.exports = { uploadToCloudinary, Cloudinary };
