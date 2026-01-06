import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Demo login - in real app, this would call an API
    if (username === 'demo' && password === 'password') {
      login(username);
      navigate('/');
    } else {
      setError('Invalid username or password. Try demo/password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🍳 Login to Recipe App</h2>
        <p className="login-subtitle">Access your favorite recipes</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              autoComplete="username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        
        <div className="login-hint">
          <p>Demo credentials:</p>
          <p><strong>Username:</strong> demo</p>
          <p><strong>Password:</strong> password</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
