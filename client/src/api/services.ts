import { z, ZodError } from "zod";
import { useAuthStore } from "store/useAuthStore";
import axios, {
  type AxiosRequestConfig,
  type AxiosResponseHeaders,
} from "axios";
import env from "config/env";
import mockServices from "api/mock-services";

type RequestOptions<T> = AxiosRequestConfig & {
  schema?: z.ZodType<T>;
};

async function makeRequest<T>(
  options: AxiosRequestConfig,
  schema?: z.ZodType<T>,
) {
  const { token } = useAuthStore.getState();

  try {
    const response = await axios.request({
      ...options,
      url: `${env.SERVER_URL}${options.url}`,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      data: options.data || {},
      responseType: "json",
    });

    const axiosResData = {
      ...response.data,
      headers: response.headers as AxiosResponseHeaders,
    };
    return schema
      ? schema.parse(axiosResData.response)
      : (axiosResData.response as T);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      console.error(
        "Zod validation error:",
        JSON.stringify(error.issues, null, 2),
      );
      throw new Error(
        `Zod validation error: ${error.issues.map((e) => e.message).join(", ")}`,
      );
    } else if (axios.isAxiosError(error)) {
      if (error.response) {
        const msg = `Request made, but the server responded with an error: ${error.response.data.response}.`;
        console.error(msg, error);
        throw new Error(msg);
      } else if (error.request) {
        const msg = `Request made but no response is received from the server`;
        console.error(msg, error);
        throw new Error(msg);
      }
    }
    const msg = `Error occured while setting up the request`;
    console.error(msg, error);
    throw new Error(msg);
  }
}

const services = {
  get: async <T>(url: string, { schema, ...config }: RequestOptions<T> = {}) => {
    if (env.USE_MOCK) {
      const data = await mockServices.get<T>(url);
      return schema ? schema.parse(data) : data;
    }
    return await makeRequest<T>({ method: "GET", url, ...config }, schema);
  },
  post: async <T>(
    url: string,
    data?: unknown,
    { schema, ...config }: RequestOptions<T> = {},
  ) => await makeRequest<T>({ method: "POST", url, data, ...config }, schema),
  delete: async <T>(
    url: string,
    { schema, ...config }: RequestOptions<T> = {},
  ) => await makeRequest<T>({ method: "DELETE", url, ...config }, schema),
  put: async <T>(
    url: string,
    data?: unknown,
    { schema, ...config }: RequestOptions<T> = {},
  ) => await makeRequest<T>({ method: "PUT", url, data, ...config }, schema),
};

export default services;
