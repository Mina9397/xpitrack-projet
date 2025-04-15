const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

// Vous pouvez ajouter ici les routes pour les rapports
// Par exemple, des rapports sur les stocks, les ventes, etc.

module.exports = router;