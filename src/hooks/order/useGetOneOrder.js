import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getOneOrder = async (uid) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("No access token found");
  }
  const response = await axios.get(`${routes.order.get}${uid}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const useGetOneOrder = () => {
  return useMutation(getOneOrder);
};
