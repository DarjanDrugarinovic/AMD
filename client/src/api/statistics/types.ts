import { z } from "zod";

export const ZStatistic = z.object({
  id: z.number(),
  product_id: z.number(),
  firmware_id: z.number(),
  recorded_at: z.string(),
  metric: z.enum(["power_consumption", "temperature", "clock_speed", "utilization"]),
  value: z.number(),
  unit: z.string(),
});

export type Statistic = z.infer<typeof ZStatistic>;
