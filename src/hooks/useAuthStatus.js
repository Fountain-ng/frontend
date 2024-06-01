import { useQuery } from 'react-query';
import axios from 'axios';

const fetchAuthStatus = async () => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('Access Token:', accessToken);

  const response = await axios.get('http://localhost:8080/api/v1/auth/user/status', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  console.log('Auth Status Response:', response.data); // Debugging log
  return response.data;
};


export const useAuthStatus = () => {
  return useQuery('authStatus', fetchAuthStatus, {
    onError: (error) => {
      console.error('Auth status check failed:', error);
      window.location.href = '/signIn';
    }
  });
};
