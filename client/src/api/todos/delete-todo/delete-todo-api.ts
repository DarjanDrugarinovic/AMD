import services from "api/services";
import { ENDPOINTS } from "api/endpoints";

export const deleteTodo = async (todoId: number) => {
  return await services.delete(ENDPOINTS.TODO_ID.replace("{todo_id}", String(todoId)));
};
