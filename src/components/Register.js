// src/components/Register.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Import the CSS for Register

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('User registered!');
    navigate('/dashboard'); // Navigate to Dashboard after registration
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create Your BeatBox Account</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="message">
          Already have an account? <a onClick={() => navigate('/')}>Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
