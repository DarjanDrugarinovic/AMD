import services from "api/services";
import { ENDPOINTS } from "api/endpoints";

export const deleteStatistic = async (statisticId: number) => {
  return await services.delete(ENDPOINTS.STATISTIC_ID.replace("{statistic_id}", String(statisticId)));
};
