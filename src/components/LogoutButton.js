import React, {useContext} from 'react';
import '../styles/profiles.modules.css';
import { useLogout } from '../hooks/useLogout';
import { AuthContext} from '../context/AuthContext';
import GreenNavbar from './Navbar-Green';

const LogoutButton = () => {
  const logoutMutation = useLogout();
  const {authStatus, loading} = useContext(AuthContext);
  console.log('Auth Status:', authStatus);

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
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
  <GreenNavbar />
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
          {authStatus && <p>Welcome, {authStatus.userName}!</p>}         
        </div>
    </div>
</div>
    </>
  );
};

export default LogoutButton;
