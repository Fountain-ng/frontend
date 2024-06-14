import { useMutation } from 'react-query';
import axios from 'axios';
import { routes } from '../api/config/routes';

const logout = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axios.get(routes.auth.logout, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  return response.data;
};

export const useLogout = () => {
  return useMutation(logout);
};
