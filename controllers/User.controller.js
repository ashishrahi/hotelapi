const User = require('../models/User.model')

exports.getUser = async(req,res)=>{
    
    //Query
    try {
        const user = await User.findById(req.params.id);
        const {password,...others} = user._doc;
   
        //Output
        res.status(200).json(others);
        
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getUsers = async(req,res)=>{
//input

//Query
try {
      const users = await User.find(req.params.id);
  //output     
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updatedUser = async(req,res)=>{

//input    
    if(req.body.userId===req.params.id){
    
       if(req.body.password)
       {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        req.body.password = hashedPassword;
    }
   //Query 
    try {
           const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
  //Output 
             res.status(200).json(updatedUser); 
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(401).json('You can update only you account')
    }
    }

    exports.deletedUser = async(req,res)=>

//input
    {
        if(req.body.userId===req.params.id)
        {
         
       //query     
        try{
          const user = await User.findById(req.params.id);
        
            try {
                await Room.deleteMany({username:user.username});
               await User.findByIdAndDelete(req.params.id);
            
         //output   
               res.status(200).json("User has been deleted...."); 
            } 
            catch (error) {
                res.status(500).json(error)
            }}
            
            catch(error){
                res.status(404).json('User not found')
            }
        }
        else{
            res.status(401).json('You can delete only you account')
        }
        }