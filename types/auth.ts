import { AxiosError } from "axios";

export interface AuthValuesType {

}

export interface LoginParams {
    username: string
    password: string
}

export interface UserDataType {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string,
    refreshToken: string
}

export interface AuthValuesType {
    user: UserDataType | null
    loading: boolean
    isLogin: boolean
    setUser: (value: UserDataType | null) => void
    setLoading: (value: boolean) => void
    login: (values: LoginParams, errorFunction: (err: AxiosError) => void) => void
    logout: () => void
}

export type ErrCallbackType = (err: AxiosError) => void