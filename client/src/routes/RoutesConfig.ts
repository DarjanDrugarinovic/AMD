import { createElement, lazy } from "react";
import { Navigate } from "react-router";
import { AuthGuard } from "./AuthGuard";

const ProductFirmwareStatsPage = lazy(
  () => import("pages/product-firmware-stats-page"),
);
const LoginPage = lazy(() => import("pages/login-page"));

export const RoutesConfig = {
  path: "/",
  children: [
    {
      index: true,
      element: createElement(Navigate, { to: "/login", replace: true }),
    },
    {
      path: "login",
      Component: LoginPage,
    },
    {
      Component: AuthGuard,
      children: [
        {
          path: "product",
          Component: ProductFirmwareStatsPage,
          children: [
            {
              path: ":productId/firmware",
              Component: ProductFirmwareStatsPage,
            },
            {
              path: ":productId/firmware/:firmwareId",
              Component: ProductFirmwareStatsPage,
            },
            {
              path: ":productId/firmware/:firmwareId/statistic/:statisticId",
              Component: ProductFirmwareStatsPage,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: createElement(Navigate, { to: "/", replace: true }),
    },
  ],
} as const;
