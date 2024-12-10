import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getUserOrders = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("No access token found");
  }
  const response = await axios.get(`${routes.order.getByUser}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const useGetUserOrders = () => {
  return useMutation(getUserOrders);
};
