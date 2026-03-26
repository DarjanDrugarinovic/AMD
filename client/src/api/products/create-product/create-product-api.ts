import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZProduct } from "../types";
import { type CreateProduct } from "./types";

export const createProduct = async (product: CreateProduct) => {
  return await services.post(ENDPOINTS.PRODUCTS, product, { schema: ZProduct });
};
