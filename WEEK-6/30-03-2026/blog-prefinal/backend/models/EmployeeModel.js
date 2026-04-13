import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required..."],
        minLength: [3, "minimum length should be more than 3!!"]
    },
    email: {
        type: String,
        required: [true, "email is required..."],
        unique: true
    },
    mobile: {
        type: Number
    },
    designation: {
        type: String,
        required: [true, "designation is required!"]
    },
    companyName: {
        type: String,
        required: [true, "enter your company name..."]
    }
}, { 
    versionKey: false, 
    timestamps: true, 
    strict: "throw" 
});


export const Employee = model("employee", employeeSchema);