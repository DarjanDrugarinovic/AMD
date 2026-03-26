import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZProduct } from "../types";
import { type UpdateProduct } from "./types";

export const updateProduct = async (productId: number, product: UpdateProduct) => {
  return await services.put(ENDPOINTS.PRODUCT_ID.replace("{product_id}", String(productId)), product, { schema: ZProduct });
};
