import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

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

    //dev mode on off
    const devMode = process.env.REACT_APP_DEV_MODE === 'true';

    if (devMode) {
      localStorage.setItem('token', 'dev-token');
      navigate('/dashboard');
      return;
    }

    try {
      const response = await axios.post('https://xyz-api.com/login', {
        email,
        password,
      });

      if (response.data.success) {
        //token storing
        localStorage.setItem('token', response.data.token);
        //to dashboard
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      //error occurs
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='bckgrnd'> 
        <h1 class="heading">Unique monitoring system for API</h1>
        <div className="container">
            <div className="login-form">
                <h2 class="heading">Sign In</h2>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="email">E-mail:</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
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
                    <label for="rememberMe">Remember Me</label>
                </div>
                {/* Add forgot password page link here in anchor tag*/}
                <a href="#" className="forgot-password">
                    Forgot Password?
                </a>
                <button type="submit" disabled={loading}>
                    {loading? 'Loading...' : 'Login'}
                </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;