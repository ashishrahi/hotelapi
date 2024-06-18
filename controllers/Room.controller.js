const Room = require("../models/Room.model");
const Hotel = require("../models/Hotel.model");
 
//crateRoom

exports.createRoom = async(req, res,next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
    } catch (error) {
      next(error);
    }
res.status(200).json(savedRoom);


  } catch (error) {
    next(error);
  }

}

// //GET ALL Room

exports.getRooms = async (req,res,next) => {
try {
    const Rooms = await Room.find();
    res.status(200).json(Rooms);
  } 
  catch (error) {
    res.status(500).json(error);
  }
}

//update room availability
exports.updatedRoomAvailability = async(req,res,next)=>
  {
  try {
    await Room.updateOne({'roomNumbers._id':req.params.id},{
      $push:{'roomNumbers.$.unavailableDates':req.body.dates},
    }) 
    res.status(200).json("Rooms has been updated successfully");
  } catch (error) {
    next(error);
  }
 }


//GET USER Room
exports.getRoom = async (req, res) => {
  try {
    const getRoom = await Room.findOne({ userId: req.params.userId });
    res.status(200).json(getRoom);
  } 
  catch (err) {
    res.status(500).json(err);
  }
}


//UPDATE a Room
exports.updatedRoom = async(req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set:req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
}

//DELETE a Room
exports.deletedRoom = async (req, res) => {
  try {
   const deleteRoom = await Room.findByIdAndDelete(req.params.id);
    res.status(200).json('Room has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
}


