import { employeeDetailType } from "../db/model";
import { employeeUpdateType } from "../db/model";
import { Employee } from "../service/employee.service";
import { Request, Response } from "express";

const employee = new Employee();

export const addEmployee = (req: Request, res: Response) => {
  try {
    const newEmployeeDetails: employeeDetailType = req.body;
    if (
      !newEmployeeDetails.employeeId ||
      !newEmployeeDetails.age ||
      !newEmployeeDetails.name ||
      !newEmployeeDetails.position ||
      !newEmployeeDetails.salary
    ) {
      return res.status(400).json({ message: "all fields are necessary" });
    }
    const addedEmplyee: boolean = employee.addEmployee(newEmployeeDetails);

    if (addedEmplyee) {
      return res.status(200).json({ message: "Emplyee added successfully" });
    } else {
      return res.status(404).json({ message: "Employee already exist" });
    }
  } catch (error) {
    console.log("error on add user route", error);
    res.status(500).json({ error });
  }
};

export const udpateEmployee = (req: Request, res: Response) => {
  try {
    const updateDetails = req.body;
    
    const employeeId: number = Number(req.params.id);
    if (!updateDetails) {
      return res
        .status(404)
        .json({ message: "Fill out atleaset one field to edit" });
    }
    if (!employeeId) {
      return res.status(404).json({ message: "Id could not find, try again" });
    }

    const editedEmployee: boolean = employee.updateEmployee(
      employeeId,
      updateDetails
    );

    if (editedEmployee) {
      return res.status(200).json({ message: "Emplyee edited successfully" });
    } else {
      return res.status(404).json({ message: "Could not edit, try again" });
    }
  } catch (error) {
    console.log("error on add user route", error);
  }
};

export const readEmployee = (req: Request, res: Response) => {
  try {
    let readDetails: employeeDetailType[] = employee.readEmployee();
    return res.status(200).json({ readDetails });
  } catch (error) {
    console.log("error on add user route", error);
  }
};

export const deleteEmployee = (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    if (!id) {
      return res
        .status(404)
        .json({ message: "Please provide the id to be deleted" });
    }

    const deletedEmployee: boolean = employee.deleteEmployee(id);

    if (deletedEmployee) {
      return res.status(200).json({ message: "Successfully deleted account" });
    } else {
      return res
        .status(404)
        .json({ message: "Could not delete the account please try again" });
    }
  } catch (error) {
    console.log("error on add user route", error);
    return res.status(500).json({ error });
  }
};

export const searchEmployee = (req: Request, res: Response) => {
  try {
    let name = String(req.query.name);
    if (name) {
      let searchFound: employeeDetailType[]  =employee.searchEmployee(name);

      if (searchFound.length<=0 ) {
        return res.status(404).json({ messsage: "could not find the person" });
      }
      return res.status(200).json({ searchFound });
    }
  } catch (error) {
    console.log("error on search user route", error);
  }
};
