import { useMutation } from 'react-query';
import axios from '../api/axiosConfig';

const signup = async (userData) => {
  const response = await axios.post('/auth/user/signup', userData);
  return response.data;
};

export const useSignup = () => {
  return useMutation(signup);
};
