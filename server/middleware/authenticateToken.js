const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

async function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ error: "You are not authorized" });
    }
    const token = authHeader.split(" ")[1];
    console.log('Received Token:', token);

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        console.log('Decoded Token:', decodedToken);

        const { email, userId } = decodedToken;
        req.user = { email, userId };

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token has expired' });
        }
        return res.status(403).json({ error: 'You are not authorized' });
    }
}

module.exports = authenticateToken;
