import React, { useState } from 'react';
import axios from 'axios';
import '../Components/Registre.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    setError(null); 

    const userData = { email, password };

    try {
      
      const response = await axios.post('/api/register', userData);

      
      window.location.href = '/login'; 
    } catch (err) {
      
      setError('Registration failed. Please check your information and try again.');
      console.error('Registration error:', err);
    }
  };

    return (
      <div className="container">
        <div className="header">
          <h1>Register</h1>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="card">
          <h2>Register</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" onClick={handleRegister}>Register</button>
        </div>
      </div>
    );
  };
  
  export default Register;