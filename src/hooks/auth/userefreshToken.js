import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const refreshToken = async () => {
  const token = localStorage.getItem("refreshToken");
  const response = await axios.post(routes.auth.refreshToken, { token });
  return response.data;
};

export const useRefreshToken = () => {
  return useMutation(refreshToken, {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
    },
    onError: (error) => {
      console.error("Token refresh failed:", error);
      window.location.href = "/signIn";
    },
  });
};
