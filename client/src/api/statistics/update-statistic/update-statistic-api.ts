import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZStatistic } from "../types";
import { type UpdateStatistic } from "./types";

export const updateStatistic = async (statisticId: number, statistic: UpdateStatistic) => {
  return await services.put(ENDPOINTS.STATISTIC_ID.replace("{statistic_id}", String(statisticId)), statistic, { schema: ZStatistic });
};
