import React from "react";
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from "configs/AppConfig";

export const publicRoutes = [
  {
    key: "login",
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/login")
    ),
  },
  {
    key: "register",
    path: `${AUTH_PREFIX_PATH}/register`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/register")
    ),
  },
  {
    key: "forgot-password",
    path: `${AUTH_PREFIX_PATH}/forgot-password`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/forgot-password")
    ),
  },
];

export const protectedRoutes = [
  {
    key: "dashboard.default",
    path: `${APP_PREFIX_PATH}/dashboards/default`,
    component: React.lazy(() => import("views/app-views/main/default")),
  },
  {
    key: "scheduler",
    path: `${APP_PREFIX_PATH}/scheduler`,
    component: React.lazy(() => import("views/app-views/scheduler")),
  },

  {
    key: "main.katalog",
    path: `${APP_PREFIX_PATH}/main/katalog`,
    component: React.lazy(() => import("views/app-views/main/katalog")),
  },

  {
    key: "main.katalog.product-list",
    path: `${APP_PREFIX_PATH}/main/katalog/product-list`,
    component: React.lazy(() =>
      import("views/app-views/main/katalog/product-list")
    ),
  },
  {
    key: "main.katalog.orders",
    path: `${APP_PREFIX_PATH}/main/orders`,
    component: React.lazy(() => import("views/app-views/main/orders")),
  },
  {
    key: "main.dashboard.analytic",
    path: `${APP_PREFIX_PATH}/main/analytic`,
    component: React.lazy(() => import("views/app-views/main/analytic")),
  },
  {
    key: "main.katalog.user-list",
    path: `${APP_PREFIX_PATH}/main/user-list`,
    component: React.lazy(() => import("views/app-views/main/user-list")),
  },
  {
    key: "main.setting",
    path: `${APP_PREFIX_PATH}/main/setting/*`,
    component: React.lazy(() => import("views/app-views/main/setting")),
  },
  {
    key: "sistem.settings",
    path: `${APP_PREFIX_PATH}/sistem/settings/*`,
    component: React.lazy(() => import("views/app-views/sistem/settings")),
  },
  {
    key: "banners",
    path: `${APP_PREFIX_PATH}/banners`,
    component: React.lazy(() => import("views/app-views/main/banners")),
  },
];
