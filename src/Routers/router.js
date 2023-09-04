const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');
const StationController = require('../Controllers/StationController');
const SquareController = require('../Controllers/SquareController');

router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.post('/login', UserController.authenticateUser);

router.post('/squre', SquareController.createSquare);
router.put('/square/:id', SquareController.updatdeSquare);
router.delete('/square/:id', SquareController.deleteSquare);
router.get('/square/:id', SquareController.getSquare);
router.get('/squares', SquareController.getSquares);

router.post('/station', StationController.createStation);
router.put('/station/:id', StationController.updateStation);
router.delete('/station/:id', StationController.deleteStation);
router.get('/station/:id', StationController.getStation);
router.get('/stations', StationController.getStations);

module.exports = router;
