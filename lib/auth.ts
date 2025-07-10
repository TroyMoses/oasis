"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";

export interface User {
  id: string;
  username: string;
  isAdmin: boolean;
}

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    setToken(storedToken);
    setIsLoading(false);
  }, []);

  // Validate session
  const sessionData = useQuery(
    api.auth.validateSession,
    token ? { token } : "skip"
  );

  const login = useMutation(api.auth.login);
  const logout = useMutation(api.auth.logout);

  const handleLogin = async (username: string, password: string) => {
    try {
      const result = await login({ username, password });
      localStorage.setItem("auth_token", result.token);
      setToken(result.token);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = async () => {
    if (token) {
      try {
        await logout({ token });
      } catch (error) {
        // Continue with logout even if server call fails
      }
    }
    localStorage.removeItem("auth_token");
    setToken(null);
  };

  const isAuthenticated = !isLoading && token && sessionData !== null;
  const user = sessionData?.user || null;

  return {
    user,
    isAuthenticated,
    isLoading,
    login: handleLogin,
    logout: handleLogout,
  };
}
