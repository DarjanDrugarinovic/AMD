const env = {
  SERVER_URL: import.meta.env.VITE_SERVER_URL as string,
  USE_MOCK: import.meta.env.VITE_USE_MOCK === "true",
};

export default env;
