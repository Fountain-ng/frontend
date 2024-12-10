import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getAllProducts = async () => {
  const response = await axios.get(`${routes.product.get}`);
  return response.data;
};

export const useGetAllProducts = () => {
  return useMutation(getAllProducts);
};
