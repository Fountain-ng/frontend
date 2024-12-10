import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getUpdateBasic = async (userData) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("No access token found");
  }
  const response = await axios.put(routes.user.updateBasic, userData, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const useGetUpdateBasic = () => {
  return useMutation(getUpdateBasic);
};
