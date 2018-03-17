const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');
//user's dashboard
userRoutes.get('/', authHelpers.loginRequired, usersController.index);
//other users' profiles
userRoutes.get('/:username', usersController.findUser);
//update users info
userRoutes.put('/:id', authHelpers.loginRequired, usersController.update);
//delete user
userRoutes.delete('/:id', authHelpers.loginRequired, usersController.delete);

module.exports = userRoutes;