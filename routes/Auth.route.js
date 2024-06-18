const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Register,Login,Logout} = require('../controllers/Auth.controller')
    
//upload Images


//Register
router.post('/register',Register)

//Login
router.post('/login',Login)
//Logout
router.post('/logout',Logout)



module.exports = router;
