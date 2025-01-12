"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const employeeController_1 = require("../controllers/employeeController");
router.get("/read-employee", employeeController_1.readEmployee);
router.post("/add-employee", employeeController_1.addEmployee);
router.put("/update-employee/:id", employeeController_1.udpateEmployee);
router.delete("/delete-employee/:id", employeeController_1.deleteEmployee);
router.get("/search-employee", employeeController_1.searchEmployee);
exports.default = router;
