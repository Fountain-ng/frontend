import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const updateOrder = async (uid, userData) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("No access token found");
  }
  const response = await axios.put(`${routes.order.get}${uid}`, userData, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const useUpdateOrder = () => {
  return useMutation(updateOrder);
};
