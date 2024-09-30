import { Router } from "express";
const router = Router();

import {
  addEmployee,
  udpateEmployee,
  deleteEmployee,
  readEmployee,
  searchEmployee,
} from "../controllers/employeeController";

router.get("/read-employee", readEmployee);

router.post("/add-employee", addEmployee);

router.put("/update-employee/:id", udpateEmployee);


router.delete("/delete-employee/:id", deleteEmployee);

router.get("/search-employee", searchEmployee);

export default router;
