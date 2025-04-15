const express = require('express');
const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeeController');
const { protect, admin } = require('../middleware/auth');
const { check } = require('express-validator');

const router = express.Router();

router.use(protect);
router.use(admin);

router
  .route('/')
  .get(getEmployees)
  .post(
    [
      check('name', 'Le nom est requis').not().isEmpty(),
      check('email', 'Veuillez inclure un email valide').isEmail(),
      check('role', 'Le rôle est requis').not().isEmpty(),
    ],
    createEmployee
  );

router
  .route('/:id')
  .get(getEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;