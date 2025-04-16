const express = require('express');
const router = express.Router();

// Import des fonctions du contrôleur (tu dois les avoir dans employeeController.js)
const {
  getAllEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController');

// Les routes
router.get('/', getAllEmployees);
router.post('/', addEmployee);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

// On exporte le router
module.exports = router;
