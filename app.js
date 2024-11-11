import userRoutes from './Routes/User.routes.js';
import courseRoutes from './/Routes//Course.routes.js'
import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import errorMiddleware from './Middlewares/error.middleware.js';
import paymentRoutes   from './Routes/payment.routes.js'


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials:true
}));
app.use(cookieParser());
app.use(morgan('dev'))  
app.use('/ping',function(req,res){
    res.send('Pong')
})

//  routes :
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/course',courseRoutes) 
//app.use('/api/v1/payments',paymentRoutes)



app.use('*',(req,res)=>{
    res.status(404).send('OOPS!!404 Page not found....');

});
app.use(errorMiddleware);

export default app
// module.exports=app;
