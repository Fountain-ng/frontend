import { useQuery } from 'react-query';
import axios from 'axios';
// import { routes } from '../api/config/routes';
const fetchAuthStatus = async () => {
  const accessToken = localStorage.getItem('accessToken');
  

  if(!accessToken) {
    throw new Error('No access token found');
  }

  const response = await axios.get('', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  console.log('Auth Status Response:', response.data);
  return response.data;
};


export const useAuthStatus = () => {
  return useQuery('authStatus', fetchAuthStatus, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    onError: (error) => {
      console.error('Auth status check failed:', error);
      window.location.href = '/signIn';
    }
  });
};
