import axios from "axios";
import { useMutation } from "react-query";
import { routes } from "../../api";

const getOneBrand = async (uid) => {
  const response = await axios.get(`${routes.brand.get}/${uid}`);
  return response.data;
};

export const useGetOneBrand = () => {
  return useMutation(getOneBrand);
};
