const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');

router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.post('/login', UserController.authenticateUser);

router.post('/squre', SquareController.createSquare);
router.put('/square/:id', SquareController.updateSquare);
router.delete('/square/:id', SquareController.deleteSquare);
router.get('/square/:id', SquareController.getSquare);
router.get('/squares', SquareController.getSquares);

module.exports = router;
