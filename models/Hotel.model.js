 const {mongoose,Schema} = require('mongoose');
 const hotelSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
   },
   rooms:{
    type:[String],
   },
   CheapestPrice:{
    type:Number,
    required:true,
   },
   type:{
    type:Number,
    required:true,
},
desc:{
    type:String,
    required:true,
   },
  photos:{
        type:String,
    },
    rating:{
        type:Number,
        min:0,
        max:5,
       },
    distance:{
        type:Number,
        required:true
    },
    address:{
        type:String,
     },
    city:{
        type:String,
        required:true,
    },
  
   fetured:{
    type:Boolean,
    default:false,
   }
},
{timestamps:true}
)
 const Hotel = mongoose.model('Hotel', hotelSchema);
 module.exports = Hotel;
