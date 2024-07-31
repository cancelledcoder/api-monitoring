import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import lockImage from './lock.svg';
import backgroundImage from './login-bg.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const devMode = process.env.REACT_APP_DEV_MODE === 'true';

    if (devMode) {
      localStorage.setItem('token', 'dev-token');
      navigate('/dashboard');
      return;
    }
//enter api link below to verify email and password
    try {
      const response = await axios.post('https://xyz-api.com/login', { email, password });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <img src={backgroundImage} alt="background" className="background-image" />
      <h1 className="main-heading">Unique monitoring system for API</h1>
      <div className="container">
        <img src={lockImage} alt="lock icon" className="lock-image" />
        <h2>Sign In</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle">
              <i className="fas fa-eye"></i>
            </span>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/blog">Blog</a>
        <a href="/pricing">Pricing</a>
      </div>
    </div>
  );
};

export default Login;
