import React, { useState } from 'react';
import Form from "./Form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ setIsAuth }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const formControls = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if(savedUser.isAuth === true){
      navigate('/');
    }

    if (savedUser && savedUser.email === formData.email && savedUser.password === formData.password) {
      setIsAuth(true);
      localStorage.setItem('isAuth', 'true'); 
      // Set isAuth in local storage
      toast.success("login success")
      navigate('/'); 
      // Redirect to main page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#8C96FF] p-5 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-white">Login</h2>
        <Form
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          formControls={formControls}
          buttonText="Login"
        />
        <div className="mt-4">
          <Link to="/register" className="text-white underline">Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;