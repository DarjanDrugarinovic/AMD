import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZFirmware } from "../types";
import { type CreateFirmware } from "./types";

export const createFirmware = async (firmware: CreateFirmware) => {
  return await services.post(ENDPOINTS.FIRMWARES, firmware, { schema: ZFirmware });
};
