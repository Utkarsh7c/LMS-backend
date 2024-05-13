import { register,login,logout,getProfile ,forgotPassword,resetPassword,changePassword,updateUser} from "../Controllers/user.controller.js";
import { Router } from "express";
import { isLoggedIn } from "../Middlewares/auth.middleware.js";
import upload from "../Middlewares/multer.middleware.js";


const router=Router()
router.post('/register',upload.single("avatar"),register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me', isLoggedIn,getProfile);
router.post('/reset',forgotPassword);  // /forgot-password
router.post('/reset/:resetToken',resetPassword);
router.post('/change-password',isLoggedIn,changePassword)
router.put('/update/:id',isLoggedIn,upload.single("avatar"),updateUser)








export default  router;