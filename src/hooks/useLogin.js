// import { routes } from '../api/config/routes';
import { useMutation } from 'react-query';
import axios from 'axios';

const login = async ({ email, password }) => {
  const response = await axios.post('', { email, password });
  return response.data;
};

export const useLogin = () => {
  return useMutation(login);
};
