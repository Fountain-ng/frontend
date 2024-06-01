// src/hooks/useRefreshToken.js
import { useMutation } from 'react-query';
import axios from 'axios';

const refreshToken = async () => {
  const token = localStorage.getItem('refreshToken');
  const response = await axios.post('http://localhost:8080/api/v1/auth/user/token/refresh', { token });
  return response.data;
};

export const useRefreshToken = () => {
  return useMutation(refreshToken, {
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
    },
    onError: (error) => {
      console.error('Token refresh failed:', error);
      window.location.href = '/signIn';
    }
  });
};
