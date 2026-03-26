import { z } from "zod";

export const ZCreateFirmware = z.object({
  product_id: z.number(),
  version: z.string().min(1),
  release_date: z.string(),
  type: z.enum(["BIOS", "driver", "microcode"]),
  status: z.enum(["stable", "beta", "deprecated"]),
  changelog: z.string(),
});

export type CreateFirmware = z.infer<typeof ZCreateFirmware>;
