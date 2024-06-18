const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('../utils/verifyToken')

exports.Register = async(req,res,next)=>{

try 
{
  const{username,email,country,img,city,phone,password}=req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password,salt);
  const newUser = await new User({
  username:req.body.username,
  email:req.body.email,
  password:hash,
})
      await newUser.save();
      res.status(200).json(newUser);
} 
//output
catch (error)
{
  next(error);
}

}

exports.Login = async(req,res,next)=>{
//request
const{username,password} = req.body;
//validation

//Query
    try {
      const user = await User.findOne({
        username:req.body.username
      })
    console.log(user);
      if(!user) return next(createError(404,"User not found!"))
    //output
      const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
      const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT,{expiresIn:'5d'})
      if(!isPasswordCorrect) return next(createError(404,"Wrong password or username!"));
      const{password,isAdmin,...otherDetails} = user._doc;
      res.cookie("access_token",token,{
        httpOnly:true,
      }).status(200).json(user);
    }
    
    catch (error) {
        next(error);
    }
    }

    exports.Logout= async(req,res,next)=>{
      res.cookie('jwt','',{maxAge:1})
      res.redirect('/');
    }
