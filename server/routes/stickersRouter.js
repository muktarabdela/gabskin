const express = require('express');
const router = express.Router();

const { getCategoryStickers, updateSticker, postCustomData } = require('../controllers/stickerController.js');

// upload Custom
router.get('/stickers-withCategory', getCategoryStickers);
router.put('/get-custom', postCustomData);

// update sticker
router.put('/update/:sticker_Id', updateSticker);



module.exports = router;
