// routes/employeeRoutes.js
const express = require("express");
const router = express.Router();

// Import controller functions
const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeesByRole,
} = require("../controllers/employeeController");

// Define the routes
router.get("/", getEmployees); // Get all employees with pagination and filters
router.get("/:id", getEmployee); // Get a specific employee by ID
router.post("/", createEmployee); // Create a new employee
router.put("/:id", updateEmployee); // Update an employee's data
router.delete("/:id", deleteEmployee); // Delete an employee
router.get("/role/:role", getEmployeesByRole); // Get employees by role

module.exports = router;
