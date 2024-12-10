import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const addOrder = async (userData) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("No access token found");
  }
  const response = await axios.post(routes.order.create, userData, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const useAddOrder = () => {
  return useMutation(addOrder);
};
