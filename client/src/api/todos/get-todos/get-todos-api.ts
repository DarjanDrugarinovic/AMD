import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZTodo } from "./types";

export const getTodos = async () => {
  const todos = await services.get(ENDPOINTS.TODOS, {
    schema: ZTodo.array(),
  });

  return todos;
};
