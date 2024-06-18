const express = require('express')
const router = express.Router();
const User = require('../models/User.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const multer = require('multer');
const {getUser,getUsers,updatedUser,deletedUser} = require('../controllers/User.controller')

//Get a User
router.get('/:id',getUser);

//get all users
router.get('/', getUsers)

//Update a User
router.put('/:id',updatedUser);

//Delete a User
router.delete('/:id',deletedUser)

module.exports = router;
