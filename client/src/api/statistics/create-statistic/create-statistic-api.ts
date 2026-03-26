import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZStatistic } from "../types";
import { type CreateStatistic } from "./types";

export const createStatistic = async (statistic: CreateStatistic) => {
  return await services.post(ENDPOINTS.STATISTICS, statistic, { schema: ZStatistic });
};
