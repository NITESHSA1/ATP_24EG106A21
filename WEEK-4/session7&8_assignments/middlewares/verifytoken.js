import jwt from 'jsonwebtoken';

const verifytoken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Please login to continue" });
    }

    try {
        const decoded = jwt.verify(token, "abcdef"); // Secret must match login
        req.user = decoded;
        console.log(decoded)
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
};

export default verifytoken;
