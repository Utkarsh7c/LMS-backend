import { Router } from "express";
import { getAllCourses ,getLecturesByCourseId,createCourse,updateCourse,removeCourse,addLectureToCourseById, deleteLecture} from "../Controllers/course.controller.js";
import { authorizedRoles, authorizedSubscriber, isLoggedIn } from "../Middlewares/auth.middleware.js";
import upload from "../Middlewares/multer.middleware.js";
const router= Router();

// router.get('/',getAllCourses);
router.route('/')
.get(getAllCourses)
.post(isLoggedIn, authorizedRoles('ADMIN'),
    upload.single('thumbnail'),    // multer middleware
    createCourse
    )
    .delete(isLoggedIn,authorizedRoles('ADMIN'),deleteLecture)//** updated one  */

// router.get('/"id', isLoggedIn,getLecturesByCourseId);
router.route('/:id')
.get(isLoggedIn,authorizedSubscriber,getLecturesByCourseId
    )

.put(isLoggedIn, 
    authorizedRoles('ADMIN'),
    updateCourse
    )

.delete(isLoggedIn, 
    authorizedRoles('ADMIN'),
    removeCourse
    )
    

 .post(isLoggedIn,
         authorizedRoles('ADMIN'),
         upload.single('lecture'),
        addLectureToCourseById
     )
     router.delete('/:id',deleteLecture);





export default router;