import axios from "axios";

import { API_BASE_URL } from "../config";
import { getStoredAuth } from "../auth/storage";

const createClient = (includeAuth = false) => {
  const client = axios.create({
    baseURL: API_BASE_URL,
  });

  if (includeAuth) {
    client.interceptors.request.use((config) => {
      const authState = getStoredAuth();
      const token = authState?.token;

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    });
  }

  return client;
};

export const publicApi = createClient(false);
export const apiClient = createClient(true);
