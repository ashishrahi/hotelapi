const {mongoose,Schema} = require('mongoose');

 const UserSchema = new mongoose.Schema({
 
  username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
      },
    country:{
      type:String,
    },
    img:{
       type:String,
    },
    
  city:{
        type:String,
    },
    
  phone:{
      type:String,
    },
  password:{
        type:Number,
        required:true,
       
    },
    
    isAdmin:{
      type:Boolean,
    },
   

 },{timestamps:true})
 const User = mongoose.model('User', UserSchema);
 module.exports = User;
