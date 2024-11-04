// src/components/Login.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import the CSS for Login

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('User logged in!');
    navigate('/dashboard'); // Navigate to Dashboard after login
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Welcome to BeatBox</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="message">
          Don't have an account? <a onClick={() => navigate('/register')}>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
