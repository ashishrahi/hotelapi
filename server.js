const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const authRoute = require('./routes/Auth.route')
const usersRoute = require('./routes/users.route')
const hotelRoute = require('./routes/Hotel.route')
const roomRoute = require('./routes/Room.route')

const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const app = express();
var cors = require('cors') 
const path = require('path')

mongoose.connect('mongodb://127.0.0.1:27017/HotelBook');
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Images',express.static(path.join(__dirname,"/Images")))

//middleware

app.use('/api/auth',authRoute);
app.use('/api/users',usersRoute);
app.use('/api/room',roomRoute);
app.use('/api/hotels',hotelRoute);



app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(500).json({
        success:false,
        message:errorMessage,
        status:errorStatus,
        stack:err.stack,

    });
})

app.listen(5100);
