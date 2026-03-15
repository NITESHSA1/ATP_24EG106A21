import express from 'express';
import { usermodel } from '../MODELS/user_model.js';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import verifytoken from '../middlewares/verifytoken.js';

const { sign } = jwt;
export const userAPP = express.Router();

// --- POST: Create a new user ---
userAPP.post("/users", async (req, res) => {
    try {
        const newUser = req.body;
        // Hash password before saving
        const hashedpassword = await hash(newUser.password, 10);
        newUser.password = hashedpassword;

        const newUserDocument = new usermodel(newUser);
        await newUserDocument.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(400).json({ message: "Creation failed", error: err.message });
    }
});

// --- GET: Fetch all users (Protected) ---
userAPP.get("/users", verifytoken, async (req, res) => {
    try {
        const users = await usermodel.find();
        res.status(200).json({ payload: users });
    } catch (err) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

// --- GET: Read user by Object ID ---
userAPP.get("/users/:id", async (req, res) => {
    try {
        const uid = req.params.id;
        const userobj = await usermodel.findById(uid);
        if (!userobj) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User found", payload: userobj });
    } catch (err) {
        res.status(400).json({ message: "Invalid ID format" });
    }
});

// --- PUT: Update user by ID ---
userAPP.put("/users/:id", async (req, res) => {
    try {
        const modifiedUser = req.body;
        const uid = req.params.id;
        const updatedUser = await usermodel.findByIdAndUpdate(
            uid, 
            { $set: { ...modifiedUser } }, 
            { new: true, runValidators: true }
        );
        res.status(200).json({ message: "User modified", payload: updatedUser });
    } catch (err) {
        res.status(400).json({ message: "Update failed", error: err.message });
    }
});

// --- DELETE: Delete user by ID ---
userAPP.delete("/users/:id", async (req, res) => {
    try {
        const uid = req.params.id;
        const user = await usermodel.findByIdAndDelete(uid);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Deleted user", payload: user });
    } catch (err) {
        res.status(500).json({ message: "Delete failed" });
    }
});

// --- POST: User Login (Authentication) ---
userAPP.post('/users/auth', async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await usermodel.findOne({ email: email });
        
        if (!user) {
            return res.status(404).json({ message: "Invalid email" });
        }

        // Check password
        let isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        // Create token
        const signedtoken = sign({ email: user.email }, "abcdef", { expiresIn: 20 });

        // Store token as HTTP-only cookie
        res.cookie("token", signedtoken, { 
            httpOnly: true, 
            sameSite: "Lax" 
        });

        res.status(200).json({ message: "Login successful", payload: user });
    } catch (err) {
        res.status(500).json({ message: "Login error", error: err.message });
    }
});
