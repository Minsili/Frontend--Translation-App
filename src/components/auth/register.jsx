import axios from 'axios';
import { useState } from 'react';
import './style.css';

import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/registration/', {
        email,
        password1,
        password2,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='auth-container'>
      <div className="header">
        <h2>Create a new account</h2>
        <p>Already have an account? <Link to='/login'>Log In</Link></p>
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
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
      </div>

      <div className="input-fields">
        <label htmlFor="password2">Confirm password</label>
        <input
          type="password"
          name='password2'
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>
      
      <div className="auth-btn">
        <button onClick={handleRegister}>Sign Up</button>
      </div>

    </div>
    
  );
};

export default Register;
