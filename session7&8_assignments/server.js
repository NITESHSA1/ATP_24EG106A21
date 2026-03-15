import express from 'express';
import { connect } from 'mongoose';
import { userAPP } from './APIS/userAPI.js';
import cookieparser from 'cookie-parser';

const app = express();

// 1. Built-in Middleware
app.use(express.json()); // Parses JSON bodies
app.use(cookieparser()); // Essential for reading 'req.cookies' in verifytoken.js

// 2. Routes
// Forward all requests starting with /user-api to your userAPP router
app.use("/user-api", userAPP);

// 3. Database Connection & Server Start
async function startServer() {
    try {
        // Connect to MongoDB (using your 'product_db' database)
        await connect("mongodb://127.0.0.1:27017/product_db");
        console.log("DB connection successful");

        const PORT = 4000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.log("Error in DB connection:", err);
    }
}

// 4. Global Error Handling Middleware
// This MUST be defined after all other app.use() and route calls
app.use((err, req, res, next) => {
    // Handle Mongoose Validation Errors (e.g., username too short)
    if (err.name === "ValidationError") {
        return res.status(400).json({ message: "Validation error", error: err.message });
    }
    
    // Handle Mongoose Cast Errors (e.g., invalid ID format)
    if (err.name === "CastError") {
        return res.status(400).json({ message: "Invalid ID format", error: err.message });
    }

    // Default error response for everything else
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        message: "An unexpected error occurred",
        error: err.message
    });
});

startServer();
