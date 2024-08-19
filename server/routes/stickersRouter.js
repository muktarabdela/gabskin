const express = require('express');
const router = express.Router();

const { getCategoryStickers, updateSticker, postCustomData, updatePaymentStatus, updateDeliveryStatus } = require('../controllers/stickerController.js');

// upload Custom
router.get('/stickers-withCategory', getCategoryStickers);
router.put('/get-custom', postCustomData);

// update sticker
router.put('/update/:sticker_Id', updateSticker);

router.put('/update-payment-status/:userId', updatePaymentStatus);
router.put('/update-delivery-status/:userId', updateDeliveryStatus);

module.exports = router;
