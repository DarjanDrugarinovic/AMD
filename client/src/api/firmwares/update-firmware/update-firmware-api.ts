import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZFirmware } from "../types";
import { type UpdateFirmware } from "./types";

export const updateFirmware = async (firmwareId: number, firmware: UpdateFirmware) => {
  return await services.put(ENDPOINTS.FIRMWARE_ID.replace("{firmware_id}", String(firmwareId)), firmware, { schema: ZFirmware });
};
