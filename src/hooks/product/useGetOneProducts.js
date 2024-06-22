import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getOneProduct = async (uid) => {
  const response = await axios.get(`${routes.product.get}/${uid}`);
  return response.data;
};

export const useGetOneProduct = () => {
  return useMutation(getOneProduct);
};
