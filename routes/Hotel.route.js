const router = require("express").Router();
const {createHotel,updateHotel,deletedHotel,getUserHotel,getHotels,countHotelsByCity
    ,countHotelsByType,getHotelsRooms} = require('../controllers/Hotel.controller')

//CREATE
router.post("/",createHotel);

//GET USER CART
router.get("/find/:hotelId",getUserHotel);

// //GET ALL
router.get("/",getHotels);

//UPDATE
router.put("/:id",updateHotel);

//DELETE
router.delete("/:id", deletedHotel);

//Get count by city

router.get("/city/:city",countHotelsByCity);

//Get count by types

router.get("/type/:type",countHotelsByType);

//Get Hotels Rooms
router.get("/rooms",getHotelsRooms);




module.exports = router;