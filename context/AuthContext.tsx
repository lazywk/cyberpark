// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** Axios
import { AxiosError, AxiosResponse } from "axios";

// ** Config
import authConfig from "@/configs/authConfig";

// ** Types
import {
  ErrCallbackType,
  LoginParams,
  UserDataType,
  AuthValuesType,
} from "@/types/auth";
import { api } from "@/utils/http";

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  isLogin: false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);
  const [isLogin, setIsLogin] = useState<boolean>(defaultProvider.isLogin);
  const router = useRouter();

  const initAuth = async (): Promise<void> => {
    const storedToken = window.localStorage.getItem(
      authConfig.storageTokenKeyName
    )!;
    if (storedToken) {
      setLoading(true);

      await api
        .get(authConfig.meEndpoint, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then(async (response: AxiosResponse<UserDataType>) => {
          setLoading(false);
          setIsLogin(false);
          setUser(response.data);
          if (router.pathname.startsWith("/login") || router.pathname === "/") {
            router.push("/home");
          }
        })
        .catch(() => {
          localStorage.clear();
          setUser(null);
          setLoading(false);
          setIsLogin(true);
          if (
            authConfig.onTokenExpiration === "logout" &&
            !router.pathname.includes("login")
          ) {
            router.replace("/login");
          }
        });
    } else {
      setLoading(false);
      window.localStorage.clear();
      router.push("/login");
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const handleLogin = (
    params: LoginParams,
    errorCallback?: ErrCallbackType
  ) => {
    api
      .post(authConfig.loginEndpoint, params)
      .then(async (response: AxiosResponse<UserDataType>) => {
        localStorage.setItem(
          authConfig.storageTokenKeyName,
          response.data.token
        );
        setIsLogin(true);
        router.push("/home");
        setUser(response.data);
      })

      .catch((err: AxiosError) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
    setIsLogin(false);
    router.push("/login");
  };

  const values = {
    user,
    loading,
    isLogin,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
