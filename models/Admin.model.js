const {mongoose,Schema} = require('mongoose');

 const AdminSchema = new mongoose.Schema({
 
  username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
      },
   
    img:{
       type:String,
    },
    password:{
        type:Number,
        required:true,
       
    },
    
 },{timestamps:true})
 const Admin = mongoose.model('Admin', AdminSchema);
 module.exports = Admin;
