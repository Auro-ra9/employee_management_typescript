"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const employeeRecords_json_1 = __importDefault(require("../employeeRecords.json"));
class Employee {
    // add some employee details at first
    constructor() {
        this.employeeDetails = [];
        employeeRecords_json_1.default.forEach((ele) => {
            this.addEmployee(ele);
        });
    }
    // method to add new employee details
    addEmployee(inputDetails) {
        let newEmployee = {
            employeeId: Number(inputDetails.employeeId),
            age: inputDetails.age,
            name: inputDetails.name.trim(),
            position: inputDetails.position.trim(),
            salary: inputDetails.salary,
        };
        let employeeExist = this.employeeDetails.find((ele) => ele.employeeId === Number(inputDetails.employeeId));
        if (employeeExist) {
            return false;
        }
        this.employeeDetails.push(newEmployee);
        return true;
    }
    readEmployee() {
        return this.employeeDetails;
    }
    updateEmployee(employeeId, updateDetails) {
        for (const ele of this.employeeDetails) {
            if (Number(ele.employeeId) === employeeId) {
                if (updateDetails.name !== undefined) {
                    ele.name = updateDetails.name;
                }
                if (updateDetails.age !== undefined) {
                    ele.age = updateDetails.age;
                }
                if (updateDetails.salary !== undefined) {
                    ele.salary = updateDetails.salary;
                }
                if (updateDetails.position !== undefined) {
                    ele.position = updateDetails.position;
                }
                return true;
            }
        }
        return false;
    }
    deleteEmployee(employeeId) {
        const updatedEmployeeDetails = this.employeeDetails.filter((element) => {
            if (employeeId !== Number(element.employeeId)) {
                return element;
            }
        });
        if (this.employeeDetails.length !== updatedEmployeeDetails.length) {
            this.employeeDetails = updatedEmployeeDetails;
            return true;
        }
        return false;
    }
    searchEmployee(inputName) {
        let searchDetails = this.employeeDetails.filter((ele) => ele.name === inputName);
        return searchDetails;
    }
}
exports.Employee = Employee;
