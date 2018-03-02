const express = require('express');
const eventRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const eventsController = require('../controllers/events-controller');

eventRoutes.get('/all', eventsController.findAll);
eventRoutes.post('/new', authHelpers.loginRequired, eventsController.create);

module.exports = eventRoutes;