import { employeeDetailType, employeeUpdateType } from "../db/model";
import initialEmployeeDetails from "../employeeRecords.json";

export class Employee {
  private employeeDetails: employeeDetailType[] = [];

  // add some employee details at first
  constructor() {
    initialEmployeeDetails.forEach((ele:employeeDetailType) => {
      this.addEmployee(ele);
    });
  }

  // method to add new employee details
  addEmployee(inputDetails: employeeDetailType): boolean {
    let newEmployee: employeeDetailType = {
      employeeId: Number(inputDetails.employeeId),
      age: inputDetails.age,
      name: inputDetails.name.trim(),
      position: inputDetails.position.trim(),
      salary: inputDetails.salary,
    };
    let employeeExist = this.employeeDetails.find(
      (ele) => ele.employeeId === Number(inputDetails.employeeId)
    );
    if (employeeExist) {
      return false;
    }
    this.employeeDetails.push(newEmployee);
    return true;
  }
  readEmployee(): employeeDetailType[] {
    return this.employeeDetails;
  }

  updateEmployee(
    employeeId: number,
    updateDetails: employeeUpdateType
  ): boolean {
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
  deleteEmployee(employeeId: number): boolean {
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
  searchEmployee(inputName: string): employeeDetailType[] {
    let searchDetails = this.employeeDetails.filter(
      (ele) => ele.name === inputName
    );
    return searchDetails;
  }
}
