export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3002/api";

const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export const buildApiUrl = (path = "/") => {
  const normalizedBaseUrl = trimTrailingSlash(API_BASE_URL);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBaseUrl}${normalizedPath}`;
};

const getDefaultDashboardBaseUrl = () => {
  if (typeof window === "undefined") {
    return "http://localhost:3001";
  }

  return `${window.location.protocol}//${window.location.hostname}:3001`;
};

const DASHBOARD_BASE_URL = trimTrailingSlash(
  process.env.REACT_APP_DASHBOARD_URL || getDefaultDashboardBaseUrl()
);

export const DASHBOARD_URL = DASHBOARD_BASE_URL;
export const getDashboardUrl = (path = "/") =>
  `${DASHBOARD_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
