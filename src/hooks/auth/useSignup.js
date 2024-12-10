import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const signup = async (userData) => {
  const response = await axios.post(routes.auth.signup, userData);
  return response.data;
};

export const useSignup = () => {
  return useMutation(signup);
};
