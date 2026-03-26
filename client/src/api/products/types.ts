import { z } from "zod";

export const ZProduct = z.object({
  id: z.number(),
  name: z.string(),
  family: z.string(),
  category: z.enum(["CPU", "GPU", "APU"]),
  socket: z.string(),
  release_date: z.string(),
  status: z.enum(["active", "discontinued", "upcoming"]),
});

export type Product = z.infer<typeof ZProduct>;
