export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3002/api";

const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export const buildApiUrl = (path = "/") => {
  const normalizedBaseUrl = trimTrailingSlash(API_BASE_URL);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBaseUrl}${normalizedPath}`;
};
