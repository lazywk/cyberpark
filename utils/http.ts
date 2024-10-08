import axios from "axios";

const baseURL = process.env.MODE === 'development' ? 'https://dummyjson.com/' : 'https://dummyjson.com/'

const unAuthorizeCode = [403, 401]

const http = axios.create({
    baseURL
})

http.interceptors.request.use(
    (config) => {
        const storedToken = localStorage.getItem('token')

        if (storedToken) {
            config.headers['Authorization'] = `Bearer ${storedToken}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

http.interceptors.response.use(
    (response) => response,
    (error) => {

        return Promise.reject(error);
    }
);

const httpBaseQuery = () => async ({ url, method, data, params }: any) => {
    try {
        const result = await http({ url, method, data, params });
        return { data: result.data };
    } catch (axiosError) {
        let err: any = axiosError;

        if (unAuthorizeCode.includes(err?.response?.status)) {
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }

        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.message,
            },
        };
    }
};

export const api = http
export default httpBaseQuery
