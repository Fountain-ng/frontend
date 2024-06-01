// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';

const ProtectedRoute = ({ children }) => {
  const { data, isLoading, isError } = useAuthStatus();

  console.log('Auth Status:', data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data || !data.data || !data.data.user) {
    console.log('Redirecting to login');
    return <Navigate to="/signIn" />;
  }

  return children;
};

export default ProtectedRoute;
