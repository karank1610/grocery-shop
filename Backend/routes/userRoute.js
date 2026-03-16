const express = require('express');
const { handleGet, handlePost, handleLogin, handleVerify } = require('../controllers/signInController');
const route = express.Router();

route.get('/', handleGet)
route.post('/', handlePost)
route.post('/login',handleLogin)
route.post('/verify',handleVerify)

module.exports = route;