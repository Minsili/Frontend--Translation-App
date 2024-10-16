// Login.js
import { useState } from 'react';
import axios from 'axios';
import './style.css';

import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login/', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.key);
      console.log('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='auth-container'>
      <div className="header">
        <h2>Login to account</h2>
        <p>Not yet have an account? <Link to='/register'>Register</Link></p>
      </div>
      
      <div className="input-fields">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-fields">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <div className="auth-btn">
        <button onClick={handleLogin}>Login</button>
      </div>

      <div className="forgot-pwd">
        <p><Link to='/password-reset'>Forgot password?</Link></p>
      </div>
    </div>
  );
};

export default Login;
