import userRoutes from './Routes/User.routes.js';
import courseRoutes from './/Routes//Course.routes.js'
import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import errorMiddleware from './Middlewares/error.middleware.js';
import paymentRoutes   from './Routes/payment.routes.js'
// use .js for internal data imported
// const express=require('express')
// const cors=require('cors');
// const cookieParser = require('cookie-parser');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials:true
}));
app.use(cookieParser());
app.use(morgan('dev')) // user  // for security purpose programmer  will know at dev level who and what request are they sending or calling using backend api 
app.use('/ping',function(req,res){
    res.send('Pong')
})

// 3 modules routes :
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/course',courseRoutes) 
//app.use('/api/v1/payments',paymentRoutes)



app.use('*',(req,res)=>{
    res.status(404).send('OOPS!!404 Page not found....');

});
app.use(errorMiddleware);

export default app
// module.exports=app;