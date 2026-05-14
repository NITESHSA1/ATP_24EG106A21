import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minLength: [4, "Min length is 4 chars"],
        maxLength: [50, "Max length is 50 chars"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true // Database-level constraint
    },
    age: {
        type: Number
    }
}, { versionKey: false, timestamps: true });

export const usermodel = model("users", userSchema);
