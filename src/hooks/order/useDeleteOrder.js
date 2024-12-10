import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const deleteOrder = async (uid) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("No access token found");
  }
  const response = await axios.delete(`${routes.order.delete}${uid}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const useDeleteOrder = () => {
  return useMutation(deleteOrder);
};
