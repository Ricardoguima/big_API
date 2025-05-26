const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware.authenticate, UserController.getAllUsers);
router.get('/:id', UserController.getUserById); // GET routes remain unauthenticated for now
router.post('/', authMiddleware.authenticate, UserController.createUser);
router.put('/:id', authMiddleware.authenticate, UserController.updateUser);
router.delete('/:id', authMiddleware.authenticate, UserController.deleteUser);

module.exports = router;