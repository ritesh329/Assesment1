import express from "express";

import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getEmployeeStats,
  getNextEmployeeId
} from "../controller/employee.controller.js";

const router = express.Router();

router.post("/", createEmployee);
router.get("/next-id", getNextEmployeeId);
router.get("/", getAllEmployees);
router.get("/stats", getEmployeeStats);

router.get("/:id", getEmployeeById);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

export default router;