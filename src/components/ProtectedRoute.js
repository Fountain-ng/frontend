// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import {Navigate } from 'react-router-dom';
import { AuthContext} from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { authStatus, loading } = useContext(AuthContext);

  console.log('Auth Status:', authStatus);

  if (loading) {
    return <div>Loading...</div>;
  }

  return(
    authStatus ? children : <Navigate to="/signIn" />
  ) ;
};

export default ProtectedRoute;
