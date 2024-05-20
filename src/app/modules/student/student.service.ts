import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  // inserting data using mongoose built in static method
  if (await Student.isStudentExists(studentData.id)) {
    throw new Error('Student already exists');
  }

  const result = await Student.create(studentData);

  //insert data using a custom instance
  // const student = new Student(studentData); //create an instance

  // if(await student.isStudentExists(studentData.id)){
  //   throw new Error('Student already exists');
  // }

  // const result = await student.save();

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getStudentByIdFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteStudentByIdFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getStudentByIdFromDB,
  deleteStudentByIdFromDB,
};
