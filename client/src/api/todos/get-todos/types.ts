import { z } from "zod";

export const ZTodo = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  completed: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
});
export type Todo = z.infer<typeof ZTodo>;
