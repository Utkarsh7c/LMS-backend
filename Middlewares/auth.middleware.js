import User from "../Models/user.model.js";
import AppError from "../utils/error.utils.js";
import jwt from 'jsonwebtoken';

const isLoggedIn= async (req,res,next)=>{
    // const token=(req.cookies && req.cookies.token)||null;
    const {token}= req.cookies;
    if(!token){
        return next(new AppError('Unauthenticated,please login first',400))
    }
    const userDetails=  await jwt.verify(token,process.env.jwt_secret);
    req.user=userDetails ;
    next();
}
const authorizedRoles=(...roles)=>  async (req,res,next)=>{
const currentRoles=req.user.role;
if(!roles.includes(currentRoles)){
 return next(new AppError('you donot have permission to access this ',400))
}
next();
}
const authorizedSubscriber= async (req,res,next)=>{
const subscription=req.user.subscription;
// const currentRole=req.user.role;
const user= await User.findById(req.user.id); // ** updated 

if(user.role!='ADMIN'&& subscription.status!='active'){
    return next(new AppError("Please subscribe first to this course",400))
}
next();
}
export{
    isLoggedIn,
    authorizedRoles,
    authorizedSubscriber
}