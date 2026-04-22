import axios from "axios";

import { API_BASE_URL } from "../config";

const authApi = axios.create({
  baseURL: API_BASE_URL,
});

export const registerUser = (payload) => authApi.post("/auth/signup", payload);
export const loginUser = (payload) => authApi.post("/auth/login", payload);