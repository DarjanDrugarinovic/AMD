import services from "api/services";
import { ENDPOINTS } from "api/endpoints";

export const deleteFirmware = async (firmwareId: number) => {
  return await services.delete(ENDPOINTS.FIRMWARE_ID.replace("{firmware_id}", String(firmwareId)));
};
