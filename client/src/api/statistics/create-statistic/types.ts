import { z } from "zod";

export const ZCreateStatistic = z.object({
  product_id: z.number(),
  firmware_id: z.number(),
  recorded_at: z.string(),
  metric: z.enum(["power_consumption", "temperature", "clock_speed", "utilization"]),
  value: z.number(),
  unit: z.string().min(1),
});

export type CreateStatistic = z.infer<typeof ZCreateStatistic>;
