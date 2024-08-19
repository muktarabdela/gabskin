const FormSubmission = require("../models/FormSubmission.js");


const saveFormSubmission = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const formSubmission = new FormSubmission({
            name,
            email,
            message,
        });
        await formSubmission.save();
        res.status(201).json({ message: 'Form submission saved successfully', formSubmission });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getFormSubmission = async (req, res) => {
    try {
        const formSubmissions = await FormSubmission.find();
        res.status(200).json(formSubmissions);
    } catch (error) {
        console.error('Error retrieving form submissions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = { saveFormSubmission, getFormSubmission };
