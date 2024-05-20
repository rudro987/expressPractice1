import { z } from 'zod';

const studentNameValidationSchema = z.object({
    firstName: z.string()
      .min(1, { message: 'First Name is required' })
      .max(20, { message: 'First Name can not be more than 20 characters' })
      .trim(),
    middleName: z.string().trim().optional(),
    lastName: z.string()
      .min(1, { message: 'Last Name is required' })
      .trim(),
  });
  
  // Define the Zod schema for Guardian
  const guardianValidationSchema = z.object({
    fatherName: z.string().min(1, { message: 'Father Name is required' }).trim(),
    fatherOccupation: z.string().min(1, { message: 'Father Occupation is required' }).trim(),
    fatherContactNo: z.string().min(1, { message: 'Father Contact No is required' }).trim(),
    motherName: z.string().min(1, { message: 'Mother Name is required' }).trim(),
    motherOccupation: z.string().min(1, { message: 'Mother Occupation is required' }).trim(),
    motherContactNo: z.string().min(1, { message: 'Mother Contact No is required' }),
    address: z.string().min(1, { message: 'Address is required' }),
  });
  
  // Define the Zod schema for LocalGuardian
  const localGuardianValidationSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    occupation: z.string().min(1, { message: 'Occupation is required' }),
    contactNo: z.string().min(1, { message: 'Contact No is required' }),
    address: z.string().min(1, { message: 'Address is required' }),
  });
  
  // Define the Zod schema for Student
  const studentValidationSchema = z.object({
    id: z.string().min(1, { message: 'ID is required' }),
    name: studentNameValidationSchema,
    password: z.string().min(1, { message: 'Password is required' }).max(20),
    gender: z.enum(['male', 'female', 'other'], { message: '{VALUE} is not valid' }),
    dateOfBirth: z.string().optional(),
    email: z.string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email' }),
    contactNo: z.string().min(1, { message: 'Contact No is required' }),
    emergencyContactNo: z.string().min(1, { message: 'Emergency Contact No is required' }),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presenetAddress: z.string().min(1, { message: 'Present Address is required' }),
    permanentAddress: z.string().min(1, { message: 'Permanent Address is required' }),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'blocked']).default('active'),
    isDeleted: z.boolean(),
  });

  export default studentValidationSchema;