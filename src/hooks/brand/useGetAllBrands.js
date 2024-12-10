import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getAllBrands = async () => {
  const response = await axios.get(`${routes.brand.get}`);
  return response.data;
};

export const useGetAllBrands = () => {
  return useMutation(getAllBrands);
};
