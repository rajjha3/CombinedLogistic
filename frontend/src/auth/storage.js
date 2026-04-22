const AUTH_STORAGE_KEY = "stockbroker_auth";

export const getStoredAuth = () => {
  const rawValue = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue);
  } catch (error) {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
};

export const setStoredAuth = (authPayload) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authPayload));
};

export const clearStoredAuth = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};