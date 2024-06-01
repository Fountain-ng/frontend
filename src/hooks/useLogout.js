// src/hooks/useLogout.js
import { useMutation } from 'react-query';
import axios from 'axios';

const logout = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await axios.post('http://localhost:8080/api/v1/auth/user/logout', { token: refreshToken });
  return response.data;
};

export const useLogout = () => {
  return useMutation(logout);
};
