const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');
const StationController = require('../Controllers/StationController');
const SquareController = require('../Controllers/SquareController');
const ReservationController = require('../Controllers/ReserveController');

router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.post('/login', UserController.authenticateUser);
router.get('/users', UserController.getUsers);
router.get('/user/:id', UserController.getUser);
router.get('/userbyemail/:email', UserController.getUsersByEmail);

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
router.get('/stationbysquare/:id', StationController.getStationBySquare);

router.post('/reservation', ReservationController.createReserve);
router.get('/reservations', ReservationController.getReserves);
router.get('/reservations/:id', ReservationController.getReserve);
router.put('/reservation/:id', ReservationController.updateReserve);
router.delete('/reservation/:id', ReservationController.deleteReserve);

module.exports = router;
