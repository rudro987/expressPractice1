import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//will call controller function

router.post('/create-student', StudentControllers.createStudent);

router.get('/get-students', StudentControllers.getAllStudent);

router.get('/get-students/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;