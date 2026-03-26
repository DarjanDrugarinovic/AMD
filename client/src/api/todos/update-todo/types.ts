import { z } from "zod";

export const ZUpdateTodo = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
});
export type UpdateTodo = z.infer<typeof ZUpdateTodo>;
