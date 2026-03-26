import { z } from "zod";

export const ZUpdateFirmware = z.object({
  version: z.string().min(1).optional(),
  release_date: z.string().optional(),
  type: z.enum(["BIOS", "driver", "microcode"]).optional(),
  status: z.enum(["stable", "beta", "deprecated"]).optional(),
  changelog: z.string().optional(),
});

export type UpdateFirmware = z.infer<typeof ZUpdateFirmware>;
