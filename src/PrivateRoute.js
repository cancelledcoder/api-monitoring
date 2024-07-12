import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const devMode = process.env.REACT_APP_DEV_MODE === 'true';

  return token || devMode ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
