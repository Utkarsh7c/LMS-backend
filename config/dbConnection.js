import mongoose from "mongoose";

mongoose.set('strictQuery',false);
const connectionToDb= async()=>{
    try{
        const{connection}= await mongoose.connect(
            process.env.MONOGODB_URL
    
        );
        if(connection){
            console.log(`Connected to Db :${connection.host}`);
    
        }
    }
    catch(e){
 console.log(" not connects ",e)
    }
   
}
export default connectionToDb;