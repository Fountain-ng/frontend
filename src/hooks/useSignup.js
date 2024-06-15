import { useMutation } from 'react-query';
// import { routes } from '../api/config/routes';
import axios from 'axios';

const signup = async (userData) => {
  const response = await axios.post('', userData);
  return response.data;
};

export const useSignup = () => {
  return useMutation(signup);
};
