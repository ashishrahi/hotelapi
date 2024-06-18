const express = require('express')
const router = express.Router();
const{createRoom, getRoom,getRooms,updatedRoom,deletedRoom,updatedRoomAvailability} =require('../controllers/Room.controller')

//Create a Category
router.post('/',createRoom);

//Get a category
router.get('/:id',getRoom)


//Get all category
router.get('/',getRooms)

//Update room availability
router.put('/:id',updatedRoomAvailability)


//Update a category
router.put('/:id',updatedRoom)

//Delete a category

router.delete('/:id',deletedRoom)

module.exports = router;
