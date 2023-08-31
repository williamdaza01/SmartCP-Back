const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');

router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.post('/login', UserController.authenticateUser);

module.exports = router;
