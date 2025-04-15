const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { check } = require('express-validator');

const router = express.Router();

router.post(
  '/register',
  [
    check('name', 'Le nom est requis').not().isEmpty(),
    check('email', 'Veuillez inclure un email valide').isEmail(),
    check('password', 'Veuillez entrer un mot de passe avec 6 caractères ou plus').isLength({ min: 6 }),
  ],
  register
);

router.post(
  '/login',
  [
    check('email', 'Veuillez inclure un email valide').isEmail(),
    check('password', 'Le mot de passe est requis').exists(),
  ],
  login
);

router.get('/me', protect, getMe);

module.exports = router;