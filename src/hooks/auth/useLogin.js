import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const login = async ({ email, password }) => {
  const response = await axios.post(routes.auth.login, {
    email,
    password,
  });
  return response.data;
};

export const useLogin = () => {
  return useMutation(login);
};
