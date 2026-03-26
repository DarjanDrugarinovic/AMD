import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZFirmware } from "../types";

export const getFirmwareById = async (firmwareId: number) => {
  return await services.get(ENDPOINTS.FIRMWARE_ID.replace("{firmware_id}", String(firmwareId)), { schema: ZFirmware });
};
