import React, { useState } from 'react';

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
      
            const data = await response.json();
            if (response.ok) {
              alert('Signup Successful! Please login.');
              window.location.href = '/Login';
            } else {
              alert(data.message || 'Signup Failed');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
          }
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Sign Up</h1>
        <p className="text-center text-gray-600 mb-6">
          Please create an account to book appointments.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Input */}
          <label className="flex flex-col text-gray-700 font-medium">
            Name:
            <input
              type="text"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          {/* Email Input */}
          <label className="flex flex-col text-gray-700 font-medium">
            Email:
            <input
              type="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          {/* Password Input */}
          <label className="flex flex-col text-gray-700 font-medium">
            Password:
            <input
              type="password"
              name="password"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          {/* Sign Up Button */}
          <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/Login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
