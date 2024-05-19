import Joi from 'Joi';

const studentNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .max(20)
      .required()
      .regex(/^[A-Z][a-z]*$/)
      .messages({
        'string.empty': 'First Name is required',
        'string.max': 'First Name can not be more than 20 characters',
        'string.pattern.base': '{#label} is not in capitalize format',
      }),
    middleName: Joi.string().trim().allow(''),
    lastName: Joi.string()
      .trim()
      .required()
      .regex(/^[A-Za-z]+$/)
      .messages({
        'string.empty': 'Last Name is required',
        'string.pattern.base': '{#label} is not valid',
      }),
  });
  
  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().trim().required().messages({
      'string.empty': 'Father Name is required',
    }),
    fatherOccupation: Joi.string().trim().required().messages({
      'string.empty': 'Father Occupation is required',
    }),
    fatherContactNo: Joi.string().trim().required().messages({
      'string.empty': 'Father Contact No is required',
    }),
    motherName: Joi.string().trim().required().messages({
      'string.empty': 'Mother Name is required',
    }),
    motherOccupation: Joi.string().trim().required().messages({
      'string.empty': 'Mother Occupation is required',
    }),
    motherContactNo: Joi.string().trim().required().messages({
      'string.empty': 'Mother Contact No is required',
    }),
    address: Joi.string().trim().required().messages({
      'string.empty': 'Guardian Address is required',
    }),
  });
  
  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().trim().required().messages({
      'string.empty': 'Local Guardian Name is required',
    }),
    occupation: Joi.string().trim().required().messages({
      'string.empty': 'Local Guardian Occupation is required',
    }),
    contactNo: Joi.string().trim().required().messages({
      'string.empty': 'Local Guardian Contact No is required',
    }),
    address: Joi.string().trim().required().messages({
      'string.empty': 'Local Guardian Address is required',
    }),
  });
  
  const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({
      'string.empty': 'ID is required',
    }),
    name: studentNameValidationSchema.required().messages({
      'any.required': 'Name is required',
    }),
    gender: Joi.string()
      .valid('male', 'female', 'other')
      .required()
      .messages({
        'any.only': '{#label} is not valid',
        'string.empty': 'Gender is required',
      }),
    dateOfBirth: Joi.string(),
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.email': '{#label} is not a valid email',
        'string.empty': 'Email is required',
      }),
    contactNo: Joi.string().required().messages({
      'string.empty': 'Contact No is required',
    }),
    emergencyContactNo: Joi.string().required().messages({
      'string.empty': 'Emergency Contact No is required',
    }),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .messages({
        'any.only': '{#label} is not a valid blood group',
      }),
    presenetAddress: Joi.string().required().messages({
      'string.empty': 'Present Address is required',
    }),
    permanentAddress: Joi.string().required().messages({
      'string.empty': 'Permanent Address is required',
    }),
    guardian: guardianValidationSchema.required().messages({
      'any.required': 'Guardian information is required',
    }),
    localGuardian: localGuardianValidationSchema.required().messages({
      'any.required': 'Local Guardian information is required',
    }),
    profileImg: Joi.string().uri(),
    isActive: Joi.string()
      .valid('active', 'blocked')
      .default('active')
      .messages({
        'any.only': '{#label} is not a valid status',
      }),
  });

  export default studentValidationSchema;