import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZStatistic } from "../types";

export const getStatisticById = async (statisticId: number) => {
  return await services.get(ENDPOINTS.STATISTIC_ID.replace("{statistic_id}", String(statisticId)), { schema: ZStatistic });
};
