const express = require('express');
const authRoutes = require('./auth.routes');

const Router = express.Router();

Router.use('/auth', authRoutes);

module.exports = Router;