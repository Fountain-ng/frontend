import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getUpdatePassword = async (userData) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("No access token found");
  }
  const response = await axios.put(routes.user.updatePassword, userData, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const useGetUpdatePassword = () => {
  return useMutation(getUpdatePassword);
};
