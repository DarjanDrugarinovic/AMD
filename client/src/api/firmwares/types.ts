import { z } from "zod";

export const ZFirmware = z.object({
  id: z.number(),
  product_id: z.number(),
  version: z.string(),
  release_date: z.string(),
  type: z.enum(["BIOS", "driver", "microcode"]),
  status: z.enum(["stable", "beta", "deprecated"]),
  changelog: z.string(),
});

export type Firmware = z.infer<typeof ZFirmware>;
