import express from 'express';
import { usermodel } from '../MODELS/user_model.js';


export const userAPP = express.Router();

// POST: Create a new user
userAPP.post("/users", async (req, res) => {
    try {
        const newUser = req.body;
        const newUserDocument = new usermodel(newUser);
        await newUserDocument.save(); // Fixed typo
        res.status(201).json({ message: "user created successfully" });
    } catch (err) {
        res.status(400).json({ message: "Creation failed", error: err.message });
    }
});

// GET: Fetch all users
userAPP.get("/users", async (req, res) => {
    try {
        const users = await usermodel.find();
        res.status(200).json({ payload: users });
    } catch (err) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

//read user by object id
userAPP.get("/users/:id",async(req,res)=>{
    //find the obj from aprams
    const uid=req.params.id
    //find user by id
    const userobj=await usermodel.findById(uid)
    if(!userobj){
        return res.status(404).json({message:"user not found"})
    }
    //send res
    res.status(200).json({message:"user",payload:userobj})
})

//upadted the user by there id
 userAPP.put("/users/:id",async(req,res)=>{
    //get modified user frojm req
    const modifiedUser=req.body
    const uid=req.params.id
    //find user by id
    const updateUser=await usermodel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})

    //updatre user
    res.status(200).json({message:"user modified",payload:updateUser})
 })

 //delete user by id
 userAPP.delete("/users/:id",async(req,res)=>{
    const uid=req.params.id
    const user=await usermodel.findByIdAndDelete(uid)
    if(!user){
        res.status(400).json({message:"user not htere"})
    }
    res.status(200).json({message:"deleted user",payload:user})
 })

 
