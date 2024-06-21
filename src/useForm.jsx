// import { useState } from 'react';

// const useForm = (callback) => {
//   const [values, setValues] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     position: '',
//     experience: '',
//     portfolio: '',
//     managementExp: '',
//     jsSkill: false,
//     // Add more skills as needed
//     interviewTime: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setValues({
//       ...values,
//       [name]: value
//     });
//   };

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setValues({
//       ...values,
//       [name]: checked
//     });
//   };

//   const handleDateChange = (event) => {
//     const { name, value } = event.target;
//     setValues({
//       ...values,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const validationErrors = validate(values);
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       callback();
//     }
//   };

//   const validate = (values) => {
//     let errors = {};

//     // Validate Full Name
//     if (!values.fullName.trim()) {
//       errors.fullName = 'Full Name is required';
//     }

//     // Validate Email
//     if (!values.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = 'Email is invalid';
//     }

//     // Validate Phone Number
//     if (!values.phone) {
//       errors.phone = 'Phone Number is required';
//     } else if (!/^\d+$/.test(values.phone)) {
//       errors.phone = 'Phone Number is invalid';
//     }

//     // Validate Relevant Experience
//     if (values.position === 'Developer' || values.position === 'Designer') {
//       if (!values.experience) {
//         errors.experience = 'Relevant Experience is required';
//       } else if (isNaN(values.experience) || Number(values.experience) <= 0) {
//         errors.experience = 'Relevant Experience must be a number greater than 0';
//       }
//     }

//     // Validate Portfolio URL
//     if (values.position === 'Designer') {
//       if (!values.portfolio.trim()) {
//         errors.portfolio = 'Portfolio URL is required';
//       } else if (!isValidUrl(values.portfolio)) {
//         errors.portfolio = 'Portfolio URL is invalid';
//       }
//     }

//     // Validate Management Experience
//     if (values.position === 'Manager') {
//       if (!values.managementExp.trim()) {
//         errors.managementExp = 'Management Experience is required';
//       }
//     }

//     // Validate Interview Time
//     if (!values.interviewTime) {
//       errors.interviewTime = 'Preferred Interview Time is required';
//     }

//     return errors;
//   };

//   const isValidUrl = (string) => {
//     try {
//       new URL(string);
//       return true;
//     } catch (_) {
//       return false;
//     }
//   };

//   const getFieldVisibility = (field, valuesToShow) => {
//     return valuesToShow.includes(values[field]);
//   };

//   return {
//     values,
//     errors,
//     handleChange,
//     handleSubmit,
//     handleCheckboxChange,
//     handleDateChange,
//     getFieldVisibility,
//   };
// };

// export default useForm;








import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    managementExp: '',
    skills: {
      JavaScript: false,
      CSS: false,
      Python: false
    },
    interviewTime: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setValues({
      ...values,
      skills: {
        ...values.skills,
        [value]: checked
      }
    });
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  const validate = (values) => {
    let errors = {};

    // Validate Full Name
    if (!values.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }

    // Validate Email
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    // Validate Phone Number
    if (!values.phone.trim()) {
      errors.phone = 'Phone Number is required';
    } else if (!/^\d+$/.test(values.phone)) {
      errors.phone = 'Phone Number is invalid';
    }

    // Validate Position
    if (!values.position) {
      errors.position = 'Applying for Position is required';
    }

    // Validate Relevant Experience
    if (values.position === 'Developer' || values.position === 'Designer') {
      if (!values.experience.trim()) {
        errors.experience = 'Relevant Experience is required';
      } else if (isNaN(values.experience) || Number(values.experience) <= 0) {
        errors.experience = 'Relevant Experience must be a number greater than 0';
      }
    }

    // Validate Portfolio URL
    if (values.position === 'Designer') {
      if (!values.portfolio.trim()) {
        errors.portfolio = 'Portfolio URL is required';
      } else if (!isValidUrl(values.portfolio)) {
        errors.portfolio = 'Portfolio URL is invalid';
      }
    }

    // Validate Management Experience
    if (values.position === 'Manager') {
      if (!values.managementExp.trim()) {
        errors.managementExp = 'Management Experience is required';
      }
    }

    // Validate Additional Skills
    if (!Object.values(values.skills).some(skill => skill)) {
      errors.skills = 'At least one skill must be selected';
    }

    // Validate Interview Time
    if (!values.interviewTime) {
      errors.interviewTime = 'Preferred Interview Time is required';
    }

    return errors;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const getFieldVisibility = (field, valuesToShow) => {
    return valuesToShow.includes(values[field]);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleCheckboxChange,
    handleDateChange,
    getFieldVisibility,
  };
};

export default useForm;
