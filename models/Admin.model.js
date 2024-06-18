const {mongoose,Schema} = require('mongoose');

 const AdminSchema = new mongoose.Schema({
 
  username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
      },
   
    image:{
       type:String,
    },
    password:{
        type:Number,
       
    },
    
 },{timestamps:true})
 const Admin = mongoose.model('Admin', AdminSchema);
 module.exports = Admin;
