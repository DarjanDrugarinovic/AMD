import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZProduct } from "../types";

export const getProductById = async (productId: number) => {
  return await services.get(ENDPOINTS.PRODUCT_ID.replace("{product_id}", String(productId)), { schema: ZProduct });
};
