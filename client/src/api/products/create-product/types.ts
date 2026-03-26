import { z } from "zod";

export const ZCreateProduct = z.object({
  name: z.string().min(1),
  family: z.string().min(1),
  category: z.enum(["CPU", "GPU", "APU"]),
  socket: z.string().min(1),
  release_date: z.string(),
  status: z.enum(["active", "discontinued", "upcoming"]),
});

export type CreateProduct = z.infer<typeof ZCreateProduct>;
