
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from './Form';
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const formControls = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData)); 
    toast.success("register success")
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#8C96FF] p-5 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-white">Register</h2>
        <Form
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          formControls={formControls}
          buttonText="Register"
        />
        <div className="mt-4">
          <Link to="/login" className="text-white underline">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;