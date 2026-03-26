import { z } from "zod";

export const ZCreateTodo = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});
export type CreateTodo = z.infer<typeof ZCreateTodo>;
