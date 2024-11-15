import{model,Schema} from 'mongoose'
const courseSchema=new Schema({
    title:{
        type:String,
        required:[true,'Title is required'],
        minLength:[8,'Title must be atleast  8 characters'],
        maxLength:[59,'Title must be less than 50 characters'],
        trim:true
    },
    description:{
        type:String,
        minLength:[8,'Description must be atleast  8 characters'],
        maxLength:[200,'Description must be less than 200 characters'],
        trim:true
    },
    category:{
        type:String,
        required:[true,'category is required']
    },
    thumbnail:{
        public_id:{
            type:String,
            required:true
        },
        secure_url:{
            type:String,
            required:true
        }
    },
    lectures:[
        {
        title:String,
        description:String,
        lecture:{
            public_id:{
                type:String,
                required:true
            },
            secure_url:{
                type:String,
                required:true
            }
        }

        
    }
],
numberOfLectures:{
    type:Number,
    default:0,
},
createdBy:{
    type:String,
    required:true
}},
{
timestamps:true

});
const Course= model('course',courseSchema);
export default Course;