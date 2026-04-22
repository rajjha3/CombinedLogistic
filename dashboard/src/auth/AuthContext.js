import React, { createContext, useContext, useState } from "react";

import { publicApi } from "../api/client";
import { clearStoredAuth, getStoredAuth, setStoredAuth } from "./storage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => getStoredAuth());

  const persistAuth = (payload) => {
    setStoredAuth(payload);
    setAuthState(payload);
  };

  const login = async (credentials) => {
    const response = await publicApi.post("/auth/login", credentials);
    persistAuth(response.data);
    return response.data;
  };

  const register = async (payload) => {
    const response = await publicApi.post("/auth/signup", payload);
    persistAuth(response.data);
    return response.data;
  };

  const logout = () => {
    clearStoredAuth();
    setAuthState(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token: authState?.token || "",
        user: authState?.user || null,
        isAuthenticated: Boolean(authState?.token),
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
