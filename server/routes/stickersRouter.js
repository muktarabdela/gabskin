const express = require('express');
const router = express.Router();

const { getCategoryStickers, updateSticker, postCustomData, updatePaymentStatus, updateDeliveryStatus } = require('../controllers/stickerController.js');
const authMiddleware = require('../middleware/authenticateToken.js');

// upload Custom
router.get('/stickers-withCategory', getCategoryStickers);
router.put('/get-custom', postCustomData);

// update sticker
router.put('/update/:sticker_Id', updateSticker);

router.put('/update-payment-status/:userId', authMiddleware.verifyToken, authMiddleware.checkAdmin, updatePaymentStatus);
router.put('/update-delivery-status/:userId', authMiddleware.verifyToken, authMiddleware.checkAdmin, updateDeliveryStatus);

module.exports = router;
