import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("No access token found");
  }
  const response = await axios.get(routes.user.get, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const useGetUser = () => {
  return useMutation(getUser);
};
