import products from "mock/products.json";
import firmwares from "mock/firmwares.json";
import statistics from "mock/statistics.json";
import todos from "mock/todos.json";

function resolveUrl(url: string): unknown {
  if (url === "/products/") return products;
  if (url === "/firmwares/") return firmwares;
  if (url === "/statistics/") return statistics;
  if (url === "/todos/") return todos;

  const productById = url.match(/^\/products\/(\d+)\/$/);
  if (productById) {
    return products.find((p) => p.id === Number(productById[1])) ?? null;
  }

  const firmwaresByProduct = url.match(/^\/products\/(\d+)\/firmwares\/$/);
  if (firmwaresByProduct) {
    return firmwares.filter((f) => f.product_id === Number(firmwaresByProduct[1]));
  }

  const firmwareById = url.match(/^\/firmwares\/(\d+)\/$/);
  if (firmwareById) {
    return firmwares.find((f) => f.id === Number(firmwareById[1])) ?? null;
  }

  const statisticsByFirmware = url.match(/^\/firmwares\/(\d+)\/statistics\/$/);
  if (statisticsByFirmware) {
    return statistics.filter((s) => s.firmware_id === Number(statisticsByFirmware[1]));
  }

  const statisticById = url.match(/^\/statistics\/(\d+)\/$/);
  if (statisticById) {
    return statistics.find((s) => s.id === Number(statisticById[1])) ?? null;
  }

  const todoById = url.match(/^\/todos\/(\d+)\/$/);
  if (todoById) {
    return todos.find((t) => t.id === Number(todoById[1])) ?? null;
  }

  return null;
}

const mockServices = {
  get: async <T>(url: string): Promise<T> => resolveUrl(url) as T,
};

export default mockServices;
