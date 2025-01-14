"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchEmployee = exports.deleteEmployee = exports.readEmployee = exports.udpateEmployee = exports.addEmployee = void 0;
const employee_service_1 = require("../service/employee.service");
const employee = new employee_service_1.Employee();
const addEmployee = (req, res) => {
    try {
        const newEmployeeDetails = req.body;
        if (!newEmployeeDetails.employeeId ||
            !newEmployeeDetails.age ||
            !newEmployeeDetails.name ||
            !newEmployeeDetails.position ||
            !newEmployeeDetails.salary) {
            return res.status(400).json({ message: "all fields are necessary" });
        }
        const addedEmplyee = employee.addEmployee(newEmployeeDetails);
        if (addedEmplyee) {
            return res.status(200).json({ message: "Emplyee added successfully" });
        }
        else {
            return res.status(404).json({ message: "Employee already exist" });
        }
    }
    catch (error) {
        console.log("error on add user route", error);
        res.status(500).json({ error });
    }
};
exports.addEmployee = addEmployee;
const udpateEmployee = (req, res) => {
    try {
        const updateDetails = req.body;
        const employeeId = Number(req.params.id);
        if (!updateDetails) {
            return res
                .status(404)
                .json({ message: "Fill out atleaset one field to edit" });
        }
        if (!employeeId) {
            return res.status(404).json({ message: "Id could not find, try again" });
        }
        const editedEmployee = employee.updateEmployee(employeeId, updateDetails);
        if (editedEmployee) {
            return res.status(200).json({ message: "Emplyee edited successfully" });
        }
        else {
            return res.status(404).json({ message: "Could not edit, try again" });
        }
    }
    catch (error) {
        console.log("error on add user route", error);
    }
};
exports.udpateEmployee = udpateEmployee;
const readEmployee = (req, res) => {
    try {
        let readDetails = employee.readEmployee();
        return res.status(200).json({ readDetails });
    }
    catch (error) {
        console.log("error on add user route", error);
    }
};
exports.readEmployee = readEmployee;
const deleteEmployee = (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!id) {
            return res
                .status(404)
                .json({ message: "Please provide the id to be deleted" });
        }
        const deletedEmployee = employee.deleteEmployee(id);
        if (deletedEmployee) {
            return res.status(200).json({ message: "Successfully deleted account" });
        }
        else {
            return res
                .status(404)
                .json({ message: "Could not delete the account please try again" });
        }
    }
    catch (error) {
        console.log("error on add user route", error);
        return res.status(500).json({ error });
    }
};
exports.deleteEmployee = deleteEmployee;
const searchEmployee = (req, res) => {
    try {
        let name = String(req.query.name);
        if (name) {
            let searchFound = employee.searchEmployee(name);
            if (searchFound.length <= 0) {
                return res.status(404).json({ messsage: "could not find the person" });
            }
            return res.status(200).json({ searchFound });
        }
    }
    catch (error) {
        console.log("error on search user route", error);
    }
};
exports.searchEmployee = searchEmployee;
