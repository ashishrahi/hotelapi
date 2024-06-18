const Hotel = require("../models/Hotel.model");
const Room = require("../models/Room.model");


//Create a Hotel
 exports.createHotel = async (req,res) =>{
//request
const{name,type,city,address,distance,photos,title,desc,rating,rooms,CheapestPrice,fetured}= req.body;
//validation

//Query
const newHotel = new Hotel({
  name:req.body.name,
  type:req.body.type,
  city:req.body.city,
  address:req.body.address,
  distance:req.body.distance,
  photos:req.body.photos,
  title:req.body.title,
  desc:req.body.title,
  rating:req.body.rating,
  rooms:req.body.rooms,
  CheapestPrice:req.body.CheapestPrice,
  fetured:req.body.featured
});

try {
  const savedHotel = await newHotel.save();
//response 
    res.status(200).json(savedHotel);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

// //GET ALL Hotels
exports.getHotels = async (req, res) => {
//request

//Query
   try {
     const Hotels = await Hotel.find();
 //response
     res.status(200).json(Hotels);
   } catch (err) {
     res.status(500).json(err);
   }
 }


 //GET USER Hotel
exports.getUserHotel = async (req, res) => {
  //request
    const {id} = req.params;
  //Query
    try {
      const hotel = await Hotel.findOne(req.params.id);
    //Output
      res.status(200).json(hotel);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  

//UPDATE
exports.updateHotel = async (req, res) => {
//response
const{id} = req.params;
//validation

//Query
try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

  //response
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
}

//DELETE
exports.deletedHotel = async (req, res) => {
//request
const{id}= req.params;
//Query
  try {
    await Hotel.findByIdAndDelete(req.params.id);

//response
    res.status(200).json("Hotel has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}
exports.countHotelsByCity = async (req,res,next)=>{
  const cities = req.query.cities.split(','); 

  try {
       const list = await Promise.all(
        cities.map((city)=>{
          return Hotel.countDocuments({city:city})
        })
       )    
     
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json(err);
    }
}

exports.countHotelsByType = async (req,res,next)=>{
  try {
      const hotelCount = await Hotel.countDocumentsByType({type:'hotel'});
      const apartmentCount = await Hotel.countDocumentsByType({type:'apartment'});
      const resortCount = await Hotel.countDocumentsByType({type:'resort'});
      const villaCount = await Hotel.countDocumentsByType({type:'villa'});
      const cabinCount = await Hotel.countDocumentsByType({type:'cabin'});

      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    
  } catch (error) {
    next(error);
  }
}
exports.getHotelsRooms=async(req,res,next)=>{
try {
  const hotel = await Hotel.findById(req.params.id);
  const list = await promise.all(
    hotel.rooms.map((room)=>{
      return Room.findById(room)
    })
  )
  res.status(200).json(list)
} catch (error) {
  next(error)
}


}

