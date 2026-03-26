import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZFirmware } from "../types";

export const getFirmwares = async (productId: number) => {
  return await services.get(
    ENDPOINTS.PRODUCT_FIRMWARES.replace("{product_id}", String(productId)),
    { schema: ZFirmware.array() },
  );
};
