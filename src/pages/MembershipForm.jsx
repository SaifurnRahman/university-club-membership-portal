import { useState } from 'react';
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi';
import { Link, NavLink } from 'react-router';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    dob: '',
    password: '',
    confirmPassword: '',
    department: 'CSE',
    gender: 'Male',
    interests: [],
    bio: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      let updatedInterests = [...formData.interests];
      if (checked) {
        updatedInterests.push(value);
      } else {
        updatedInterests = updatedInterests.filter((item) => item !== value);
      }
      setFormData({ ...formData, interests: updatedInterests });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};

    //  Required fields check
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!formData.studentId.trim()) newErrors.studentId = "Student ID is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";

    //  Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    //  Password pattern/length rule (min 6 chars, at least one number)
    const passRegex = /^(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passRegex.test(formData.password)) {
      newErrors.password = "Password must be at least 6 characters and include a number.";
    }

    //  Cross-field rule (Confirm password matches password)
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    //  Custom group rule (At least one checkbox selected)
    if (formData.interests.length === 0) {
      newErrors.interests = "Please select at least one club interest.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      studentId: '',
      dob: '',
      password: '',
      confirmPassword: '',
      department: 'CSE',
      gender: 'Male',
      interests: [],
      bio: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100">
        
        <Link to={'/'}>
        <button 
          
          className="inline-flex items-center text-sm font-semibold text-indigo-600 mb-8 hover:text-indigo-700 transition cursor-pointer bg-transparent border-none p-0"
        >
          <HiArrowLeft className="mr-2" /> Back to Home
        </button></Link>
        

        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">UniCircle Membership Registration</h2>
        <p className="text-sm text-gray-500 mb-8">Complete the registration form below to join campus organizations.</p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <HiCheckCircle />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Registration Successful!</h3>
            <p className="text-emerald-700 text-sm mb-6">Here is a summary of the data recorded on your application:</p>
            
            <div className="bg-white/80 border border-emerald-100 text-left p-6 rounded-xl text-sm text-gray-700 space-y-2 mb-6 shadow-xs">
              <p><strong>Full Name:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Student ID:</strong> {formData.studentId}</p>
              <p><strong>Date of Birth:</strong> {formData.dob}</p>
              <p><strong>Department:</strong> {formData.department}</p>
              <p><strong>Gender:</strong> {formData.gender}</p>
              <p><strong>Interests:</strong> {formData.interests.join(', ')}</p>
              {formData.bio && <p><strong>Bio:</strong> {formData.bio}</p>}
            </div>

            <button 
              onClick={handleReset} 
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition cursor-pointer"
            >
              Register Another Student
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Field 1: Text Input () */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Full Name *</label>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="John Doe" 
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" 
              />
              {errors.fullName && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.fullName}</p>}
            </div>

            {/* Field 2: Email Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Email Address *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="student@university.edu" 
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" 
              />
              {errors.email && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
            </div>

            {/* Field 3: Number Input (Student ID) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Student ID (Number) *</label>
              <input 
                type="number" 
                name="studentId" 
                value={formData.studentId} 
                onChange={handleChange} 
                placeholder="20261001" 
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" 
              />
              {errors.studentId && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.studentId}</p>}
            </div>

            {/* Field 4: Date Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Date of Birth *</label>
              <input 
                type="date" 
                name="dob" 
                value={formData.dob} 
                onChange={handleChange} 
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" 
              />
              {errors.dob && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.dob}</p>}
            </div>

            {/* Field 5 & 6: Password & Confirm Password (Cross-field rule) */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Password *</label>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  placeholder="Min 6 chars & number" 
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" 
                />
                {errors.password && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.password}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Confirm Password *</label>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                  placeholder="Re-enter password" 
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" 
                />
                {errors.confirmPassword && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Field 7: Select Dropdown */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Department *</label>
              <select 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
              >
                <option value="CSE">Computer Science & Engineering</option>
                <option value="EEE">Electrical & Electronic Engineering</option>
                <option value="BBA">Business Administration</option>
                <option value="Textile">Textile Engineering</option>
              </select>
            </div>

            {/* Field 8: Radio Buttons */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Gender *</label>
              <div className="flex space-x-6">
                {['Male', 'Female'].map((g) => (
                  <label key={g} className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                    <input 
                      type="radio" 
                      name="gender" 
                      value={g} 
                      checked={formData.gender === g} 
                      onChange={handleChange} 
                      className="text-indigo-600 focus:ring-indigo-500" 
                    />
                    <span>{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Field 9: Checkboxes (Club Interests) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Club Interests (Select at least one) *</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {['Programming Club', 'Robotics Society', 'Design & Arts', 'Debate Club'].map((club) => (
                  <label key={club} className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer bg-gray-50/50 border border-gray-200 p-3 rounded-xl">
                    <input 
                      type="checkbox" 
                      name="interests" 
                      value={club} 
                      checked={formData.interests.includes(club)} 
                      onChange={handleChange} 
                      className="rounded text-indigo-600 focus:ring-indigo-500" 
                    />
                    <span>{club}</span>
                  </label>
                ))}
              </div>
              {errors.interests && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.interests}</p>}
            </div>

            {/* Field 10: Textarea */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Statement of Purpose / Bio</label>
              <textarea 
                name="bio" 
                rows="3" 
                value={formData.bio} 
                onChange={handleChange} 
                placeholder="Tell us why you want to join UniCircle..." 
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
              ></textarea>
            </div>

            {/* Form Actions: Submit and Reset Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button 
                type="submit" 
                className="flex-1 bg-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition cursor-pointer"
              >
                Submit Application
              </button>
              <button 
                type="button" 
                onClick={handleReset} 
                className="px-6 bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-200 transition cursor-pointer"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MembershipForm;