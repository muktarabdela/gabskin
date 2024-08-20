const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authenticateToken.js');
const { saveFormSubmission, getFormSubmission } = require('../controllers/formSubmissionController.js');

router.post('/form-submission/', saveFormSubmission);
router.get('/get-submission', authMiddleware.verifyToken, authMiddleware.checkAdmin, getFormSubmission);

module.exports = router;
