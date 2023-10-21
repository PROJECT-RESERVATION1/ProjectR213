import React, { useState } from 'react';
import axios from 'axios';
import '../Components/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null); 

    const userData = { email, password };

    try {
          const response = await axios.post('/api/login', userData);
          const { token } = response.data; 
          localStorage.setItem('token', token);
          window.location.href = '/dashboard';
         } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', err);
    }
  };
  
    return (
      <div className="container">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
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
        <button onClick={handleLogin}>Log In</button>
      </div>
    );
  };
  
export default Login;
