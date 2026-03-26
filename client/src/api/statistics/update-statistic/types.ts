import { z } from "zod";

export const ZUpdateStatistic = z.object({
  recorded_at: z.string().optional(),
  metric: z.enum(["power_consumption", "temperature", "clock_speed", "utilization"]).optional(),
  value: z.number().optional(),
  unit: z.string().min(1).optional(),
});

export type UpdateStatistic = z.infer<typeof ZUpdateStatistic>;
