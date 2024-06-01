import React from 'react';
import '../styles/profiles.modules.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Navbar from './Navbar';

const LogoutButton = () => {
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate(null, {
      onSuccess: () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log('User logged out successfully');
        window.location.href = '/';
      },
      onError: (error) => {
        console.error('Logout failed:', error);
      }
    });
  };
  const { data: authStatus} = useAuthStatus();
  const isAuthenticated = authStatus && authStatus.data && authStatus.data.user;

  return (
    <>
  <Navbar />
<div className='profile'>
    <div className='profile-header'>
        <h1>MY ACCOUNT</h1>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
    <div className='profile-content'>
        <div className='profile-orders'>
            <h2>ORDER HISTORY</h2>
            <p>You haven&apos;t placed any orders yet.</p>
        </div>
        <div className='profile-details'>
          <h2>ACCOUNT DETAILS</h2>
          {
            isAuthenticated ? (
              <p>Welcome, {authStatus.data.user.firstName} {authStatus.data.user.lastName}!</p>
            ) : (
              <p>You are not logged in.</p>
            )
          }
          
        </div>
    </div>
</div>
    </>
  );
};

export default LogoutButton;
