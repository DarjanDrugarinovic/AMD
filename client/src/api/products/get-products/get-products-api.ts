import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZProduct } from "../types";

export const getProducts = async () => {
  return await services.get(ENDPOINTS.PRODUCTS, { schema: ZProduct.array() });
};
