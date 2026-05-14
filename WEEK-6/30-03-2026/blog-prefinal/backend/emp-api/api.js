import exp from 'express'

import { Employee } from '../models/EmployeeModel.js'

export const empAPP = exp.Router();

// Get All Employees
empAPP.get("/employee", async (request, response) => {
    let emps = await Employee.find();
    if (emps.length > 0) {
        return response.status(200).json({ message: "Employee Details Fetched!", payload: emps });
    }
    return response.status(404).json({ message: "Employee Details Not Found!" });
});

// Update Employee
empAPP.put("/employee", async (request, response) => {
    let data = request.body;
    try {

        let updatedEmp = await Employee.findByIdAndUpdate(data._id, data, { new: true });
        response.status(201).json({ message: "Transaction Successful!", payload: updatedEmp });
    } catch (error) {
        response.status(400).json({ message: "Transaction Failed!", error: error.message });
    }
});

// Create Employee
empAPP.post("/employee", async (request, response) => {
    try {
        const newUser = new Employee(request.body);
        await newUser.save();
        return response.status(201).json({ message: "Employee Created!", payload: newUser });
    } catch (error) {
        return response.status(400).json({ message: "Creation Failed!", error: error.message });
    }
});

// Delete Employee
empAPP.delete("/employee/:id", async (request, response) => {
    try {
        const user = await Employee.findByIdAndDelete(request.params.id);
        if (user) { 
            return response.status(200).json({ message: "Employee Deleted", payload: user });
        }
        return response.status(404).json({ message: "Employee not found" });
    } catch (error) {
        return response.status(500).json({ message: "Server Error" });
    }
});