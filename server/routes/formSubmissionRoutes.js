const express = require('express');
const router = express.Router();

const { saveFormSubmission, getFormSubmission } = require('../controllers/formSubmissionController.js');

router.post('/form-submission/', saveFormSubmission);
router.get('/get-submission', getFormSubmission);

module.exports = router;
