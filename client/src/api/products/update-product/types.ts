import { z } from "zod";

export const ZUpdateProduct = z.object({
  name: z.string().min(1).optional(),
  family: z.string().min(1).optional(),
  category: z.enum(["CPU", "GPU", "APU"]).optional(),
  socket: z.string().min(1).optional(),
  release_date: z.string().optional(),
  status: z.enum(["active", "discontinued", "upcoming"]).optional(),
});

export type UpdateProduct = z.infer<typeof ZUpdateProduct>;
