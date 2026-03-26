import services from "api/services";
import { ENDPOINTS } from "api/endpoints";

export const deleteProduct = async (productId: number) => {
  return await services.delete(ENDPOINTS.PRODUCT_ID.replace("{product_id}", String(productId)));
};
