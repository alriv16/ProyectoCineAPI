const express = require('express');

const router = express.Router();


const Billboards = require('../controllers/billboards');
const CinemaBranches = require('../controllers/cinemaBranches');
const CinemaBranchRooms = require( '../controllers/cinemaBranchRooms');
const Cities = require('../controllers/cities');
const Movies = require('../controllers/movies');
const Rooms = require('../controllers/rooms');
const Schedules = require ('../controllers/schedules');
const Seats = require('../controllers/seats');
const States = require('../controllers/states');
const Statuses = require('../controllers/statuses');

// Billboards routes
router.get('/count/billboards', Billboards.count);
router.get('/billboards', Billboards.findAll);
router.post('/billboards', Billboards.create);
router.get('/billboards/:id', Billboards.findById);
router.patch('/billboards/:id', Billboards.update);
router.delete('/billboards/:id', Billboards.destroy);

// CinemaBranches routes
router.get('/count/cinemaBranches', CinemaBranches.count);
router.get('/cinemaBranches', CinemaBranches.findAll);
router.post('/cinemaBranches', CinemaBranches.create);
router.get('/cinemaBranches/:id', CinemaBranches.findById);
router.patch('/cinemaBranches/:id', CinemaBranches.update);
router.delete('/cinemaBranches/:id', CinemaBranches.destroy);

// CinemaBranchRooms routes
router.get('/count/cinemaBranchRooms', CinemaBranchRooms.count);
router.get('/cinemaBranchRooms', CinemaBranchRooms.findAll);
router.post('/cinemaBranchRooms', CinemaBranchRooms.create);
router.get('/cinemaBranchRooms/:id', CinemaBranchRooms.findById);
router.patch('/cinemaBranchRooms/:id', CinemaBranchRooms.update);
router.delete('/cinemaBranchRooms/:id', CinemaBranchRooms.destroy);

// Cities routes
router.get('/count/cities', Cities.count);
router.get('/cities', Cities.findAll);
router.post('/cities', Cities.create);
router.get('/cities/:id', Cities.findById);
router.patch('/cities/:id', Cities.update);
router.delete('/cities/:id', Cities.destroy);

// Movies routes
router.get('/count/movies', Movies.count);
router.get('/movies', Movies.findAll);
router.post('/movies', Movies.create);
router.get('/movies/:id', Movies.findById);
router.patch('/movies/:id', Movies.update);
router.delete('/movies/:id', Movies.destroy);

// Rooms routes
router.get('/count/rooms', Rooms.count);
router.get('/rooms', Rooms.findAll);
router.post('/rooms', Rooms.create);
router.get('/rooms/:id', Rooms.findById);
router.patch('/rooms/:id', Rooms.update);
router.delete('/rooms/:id', Rooms.destroy);

// Schedules routes
router.get('/count/schedules', Schedules.count);
router.get('/schedules', Schedules.findAll);
router.post('/schedules', Schedules.create);
router.get('/schedules/:id', Schedules.findById);
router.patch('/schedules/:id', Schedules.update);
router.delete('/schedules/:id', Schedules.destroy);

// Seats routes
router.get('/count/seats', Seats.count);
router.get('/seats', Seats.findAll);
router.post('/seats', Seats.create);
router.get('/seats/:id', Seats.findById);
router.patch('/seats/:id', Seats.update);
router.delete('/seats/:id', Seats.destroy);

// States routes
router.get('/count/states', States.count);
router.get('/states', States.findAll);
router.post('/states', States.create);
router.get('/states/:id', States.findById);
router.patch('/states/:id', States.update);
router.delete('/states/:id', States.destroy);

// Statuses routes
router.get('/count/statuses', Statuses.count);
router.get('/statuses', Statuses.findAll);
router.post('/statuses', Statuses.create);
router.get('/statuses/:id', Statuses.findById);
router.patch('/statuses/:id', Statuses.update);
router.delete('/statuses/:id', Statuses.destroy);

module.exports = router;

