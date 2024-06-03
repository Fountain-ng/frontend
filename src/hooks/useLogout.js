import { useMutation } from 'react-query';
import axios from 'axios';

const logout = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axios.get('http://localhost:8080/api/v1/auth/user/logout', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  return response.data;
};

export const useLogout = () => {
  return useMutation(logout);
};
