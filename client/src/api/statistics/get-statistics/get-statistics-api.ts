import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZStatistic } from "../types";

export const getStatistics = async () => {
  return await services.get(ENDPOINTS.STATISTICS, { schema: ZStatistic.array() });
};

export const getStatisticsByFirmware = async (firmwareId: number) => {
  return await services.get(
    ENDPOINTS.FIRMWARE_STATISTICS.replace("{firmware_id}", String(firmwareId)),
    { schema: ZStatistic.array() },
  );
};
