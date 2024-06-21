// import React, { useState } from 'react';
// import useForm from './useForm'; // Custom hook for form handling and validation
// import './JobApplicationForm.css'; // Import CSS for styling

// const JobApplicationForm = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const { 
//     values,
//     errors,
//     handleChange,
//     handleSubmit,
//     handleCheckboxChange,
//     handleDateChange,
//     getFieldVisibility 
//   } = useForm(submitForm); // useForm is a custom hook for form handling

//   function submitForm() {
//     setSubmitted(true); // Set form as submitted
//   }

//   if (submitted) {
//     return (
//       <div className="form-summary">
//         <h2>Form Submitted Successfully</h2>
//         <p><strong>Full Name:</strong> {values.fullName}</p>
//         <p><strong>Email:</strong> {values.email}</p>
//         <p><strong>Phone Number:</strong> {values.phone}</p>
//         <p><strong>Applying for Position:</strong> {values.position}</p>
//         {getFieldVisibility('position', ['Developer', 'Designer']) && (
//           <p><strong>Relevant Experience:</strong> {values.experience} years</p>
//         )}
//         {getFieldVisibility('position', ['Designer']) && (
//           <p><strong>Portfolio URL:</strong> {values.portfolio}</p>
//         )}
//         {getFieldVisibility('position', ['Manager']) && (
//           <p><strong>Management Experience:</strong> {values.managementExp}</p>
//         )}
//         <p><strong>Additional Skills:</strong> {values.jsSkill ? 'JavaScript' : ''}</p>
//         <p><strong>Preferred Interview Time:</strong> {values.interviewTime}</p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="job-application-form">
//       <h2>Job Application Form</h2>
//       {/* Full Name */}
//       <div className="form-group">
//         <label htmlFor="fullName">Full Name</label>
//         <input 
//           type="text" 
//           id="fullName" 
//           name="fullName" 
//           value={values.fullName} 
//           onChange={handleChange}
//           required 
//         />
//         {errors.fullName && <p className="error">{errors.fullName}</p>}
//       </div>

//       {/* Email */}
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input 
//           type="email" 
//           id="email" 
//           name="email" 
//           value={values.email} 
//           onChange={handleChange}
//           required 
//         />
//         {errors.email && <p className="error">{errors.email}</p>}
//       </div>

//       {/* Phone Number */}
//       <div className="form-group">
//         <label htmlFor="phone">Phone Number</label>
//         <input 
//           type="tel" 
//           id="phone" 
//           name="phone" 
//           value={values.phone} 
//           onChange={handleChange}
//           required 
//         />
//         {errors.phone && <p className="error">{errors.phone}</p>}
//       </div>

//       {/* Applying for Position */}
//       <div className="form-group">
//         <label htmlFor="position">Applying for Position</label>
//         <select 
//           id="position" 
//           name="position" 
//           value={values.position} 
//           onChange={handleChange}
//           required 
//         >
//           <option value="">Select...</option>
//           <option value="Developer">Developer</option>
//           <option value="Designer">Designer</option>
//           <option value="Manager">Manager</option>
//         </select>
//         {errors.position && <p className="error">{errors.position}</p>}
//       </div>

//       {/* Relevant Experience (visible if Developer or Designer is selected) */}
//       {getFieldVisibility('position', ['Developer', 'Designer']) && (
//         <div className="form-group">
//           <label htmlFor="experience">Relevant Experience (years)</label>
//           <input 
//             type="number" 
//             id="experience" 
//             name="experience" 
//             value={values.experience} 
//             onChange={handleChange}
//             required={values.position === 'Developer' || values.position === 'Designer'}
//           />
//           {errors.experience && <p className="error">{errors.experience}</p>}
//         </div>
//       )}

//       {/* Portfolio URL (visible if Designer is selected) */}
//       {getFieldVisibility('position', ['Designer']) && (
//         <div className="form-group">
//           <label htmlFor="portfolio">Portfolio URL</label>
//           <input 
//             type="url" 
//             id="portfolio" 
//             name="portfolio" 
//             value={values.portfolio} 
//             onChange={handleChange}
//             required={values.position === 'Designer'}
//           />
//           {errors.portfolio && <p className="error">{errors.portfolio}</p>}
//         </div>
//       )}

//       {/* Management Experience (visible if Manager is selected) */}
//       {getFieldVisibility('position', ['Manager']) && (
//         <div className="form-group">
//           <label htmlFor="managementExp">Management Experience</label>
//           <textarea 
//             id="managementExp" 
//             name="managementExp" 
//             value={values.managementExp} 
//             onChange={handleChange}
//             required={values.position === 'Manager'}
//           />
//           {errors.managementExp && <p className="error">{errors.managementExp}</p>}
//         </div>
//       )}

//       {/* Additional Skills */}
//       <div className="form-group">
//         <label>Additional Skills</label><br />
//         <input 
//           type="checkbox" 
//           id="jsSkill" 
//           name="jsSkill" 
//           checked={values.jsSkill} 
//           onChange={handleCheckboxChange}
//         />
//         <label htmlFor="jsSkill">JavaScript</label><br />
//         <label htmlFor="jsSkill">Python</label><br />
//         <label htmlFor="jsSkill">CSS</label><br />
//         {/* Repeat for other skills */}
//       </div>

//       {/* Preferred Interview Time */}
//       <div className="form-group">
//         <label htmlFor="interviewTime">Preferred Interview Time</label>
//         <input 
//           type="datetime-local" 
//           id="interviewTime" 
//           name="interviewTime" 
//           value={values.interviewTime} 
//           onChange={handleDateChange}
//           required 
//         />
//         {errors.interviewTime && <p className="error">{errors.interviewTime}</p>}
//       </div>

//       {/* Submit Button */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default JobApplicationForm;









import React, { useState } from 'react';
import useForm from './useForm'; // Custom hook for form handling and validation
import './JobApplicationForm.css'; // Import CSS for styling

const JobApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { 
    values,
    errors,
    handleChange,
    handleSubmit,
    handleCheckboxChange,
    handleDateChange,
    getFieldVisibility 
  } = useForm(submitForm); // useForm is a custom hook for form handling

  function submitForm() {
    setSubmitted(true); // Set form as submitted
  }

  if (submitted) {
    return (
      <div className="form-summary">
        <h2>Form Submitted Successfully</h2>
        <p><strong>Full Name:</strong> {values.fullName}</p>
        <p><strong>Email:</strong> {values.email}</p>
        <p><strong>Phone Number:</strong> {values.phone}</p>
        <p><strong>Applying for Position:</strong> {values.position}</p>
        {getFieldVisibility('position', ['Developer', 'Designer']) && (
          <p><strong>Relevant Experience:</strong> {values.experience} years</p>
        )}
        {getFieldVisibility('position', ['Designer']) && (
          <p><strong>Portfolio URL:</strong> {values.portfolio}</p>
        )}
        {getFieldVisibility('position', ['Manager']) && (
          <p><strong>Management Experience:</strong> {values.managementExp}</p>
        )}
        <p><strong>Additional Skills:</strong> {Object.keys(values.skills).filter(skill => values.skills[skill]).join(', ')}</p>
        <p><strong>Preferred Interview Time:</strong> {values.interviewTime}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="job-application-form">
      <h2>Job Application Form</h2>
      {/* Full Name */}
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input 
          type="text" 
          id="fullName" 
          name="fullName" 
          value={values.fullName} 
          onChange={handleChange}
          required 
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={values.email} 
          onChange={handleChange}
          required 
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={values.phone} 
          onChange={handleChange}
          required 
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      {/* Applying for Position */}
      <div className="form-group">
        <label htmlFor="position">Applying for Position</label>
        <select 
          id="position" 
          name="position" 
          value={values.position} 
          onChange={handleChange}
          required 
        >
          <option value="">Select...</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        {errors.position && <p className="error">{errors.position}</p>}
      </div>

      {/* Relevant Experience (visible if Developer or Designer is selected) */}
      {getFieldVisibility('position', ['Developer', 'Designer']) && (
        <div className="form-group">
          <label htmlFor="experience">Relevant Experience (years)</label>
          <input 
            type="number" 
            id="experience" 
            name="experience" 
            value={values.experience} 
            onChange={handleChange}
            required={values.position === 'Developer' || values.position === 'Designer'}
          />
          {errors.experience && <p className="error">{errors.experience}</p>}
        </div>
      )}

      {/* Portfolio URL (visible if Designer is selected) */}
      {getFieldVisibility('position', ['Designer']) && (
        <div className="form-group">
          <label htmlFor="portfolio">Portfolio URL</label>
          <input 
            type="url" 
            id="portfolio" 
            name="portfolio" 
            value={values.portfolio} 
            onChange={handleChange}
            required={values.position === 'Designer'}
          />
          {errors.portfolio && <p className="error">{errors.portfolio}</p>}
        </div>
      )}

      {/* Management Experience (visible if Manager is selected) */}
      {getFieldVisibility('position', ['Manager']) && (
        <div className="form-group">
          <label htmlFor="managementExp">Management Experience</label>
          <textarea 
            id="managementExp" 
            name="managementExp" 
            value={values.managementExp} 
            onChange={handleChange}
            required={values.position === 'Manager'}
          />
          {errors.managementExp && <p className="error">{errors.managementExp}</p>}
        </div>
      )}

      {/* Additional Skills */}
      <div className='additional-skills'>
        <p>Additional Skills</p>
        <input 
          type="checkbox" 
          id="jsSkill" 
          name="skills" 
          value="JavaScript" 
          checked={values.skills.JavaScript} 
          onChange={handleCheckboxChange}
          
        />
        <label htmlFor="jsSkill">JavaScript</label>
        <input type="checkbox" 
          id="cssSkill" 
          name="skills" 
          value="CSS" 
          checked={values.skills.CSS} 
          onChange={handleCheckboxChange}
        />
        <label htmlFor="cssSkill">CSS</label>
        <input 
          type="checkbox" 
          id="pythonSkill" 
          name="skills" 
          value="Python" 
          checked={values.skills.Python} 
          onChange={handleCheckboxChange}
        />
        <label htmlFor="pythonSkill">Python</label><br />
        {/* Add more skills as needed */}
        {errors.skills && <p className="error">{errors.skills}</p>}
      </div>

      {/* Preferred Interview Time */}
      <div className="form-group">
        <label htmlFor="interviewTime">Preferred Interview Time</label>
        <input 
          type="datetime-local" 
          id="interviewTime" 
          name="interviewTime" 
          value={values.interviewTime} 
          onChange={handleDateChange}
          required 
        />
        {errors.interviewTime && <p className="error">{errors.interviewTime}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;
