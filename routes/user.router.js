const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware.authenticate, UserController.getAllUsers);

router.get('/', UserController.getAllUsers);

module.exports = router;