import { useState } from 'react';
import axios from 'axios';
import './style.css';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/password/reset/', {
        email,
      });
      console.log('Password reset email sent!', response.data);
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
    <div className='auth-container'>
    <div className="header">
      <h2>Reset Password</h2>
    </div>
    
    <div className="input-fields">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    
    <div className="auth-btn">
      <button onClick={handlePasswordReset}>Send Reset Link</button>
    </div>

  </div>
  );
};

export default PasswordReset;
