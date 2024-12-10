import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getBrandProducts = async (brandID) => {
  const response = await axios.get(`${routes.product.getByBrand}${brandID}`);
  return response.data;
};

export const useGetBrandProducts = () => {
  return useMutation(getBrandProducts);
};
