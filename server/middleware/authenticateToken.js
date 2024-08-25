const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const Admin = require('../models/adminModal.js');
require('dotenv').config();

// verify token
const verifyToken = async (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Assuming token is passed as Bearer token
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).send({
                message: "Unauthorized!",
                status: false,
            });
        }
        // console.log("Here is the decoded token");
        // console.log("decoded token ",decoded);

        if (decoded) {
            req.user = {
                email: decoded.email, role: decoded.role, isAdmin: decoded.isAdmin, userId: decoded.userId
            };
        }

        next();
    });
};


// function to check if the user is admin
const checkAdmin = async (req, res, next) => {
    // const token = req.headers["authorization"]?.split(" ")[1];
    // if (!token) {
    //     return res.status(401).json({ message: 'No token provided' });
    // }
    try {
        const email = req.user.email;
        const user = await Admin.findOne({ email: email, role: 'admin', isAdmin: true });
        // if (!user) {
        //     return res.status(401).json({ message: 'admin user not found' });
        // }
        if (user.role !== 'admin' || !user.isAdmin) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
}


const authMiddleware = {
    verifyToken,
    checkAdmin,
}

module.exports = authMiddleware;

