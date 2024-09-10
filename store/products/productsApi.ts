import { ProductsResponse } from '@/types/products'
import httpBaseQuery from '@/utils/http'
import { createApi } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: httpBaseQuery(),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponse, string>({
            query: (params) => ({
                url: `products?${params}`,
                method: 'get',
            }),
        }),
        createUser: builder.mutation<any, any>({
            query: (data) => ({
                url: `users-create/`,
                method: 'post',
                data
            }),
        }),
        updateUser: builder.mutation<any, any>({
            query: (data) => ({
                url: `users-update/${data.id}/`,
                method: 'patch',
                data
            }),
        }),
        deleteUser: builder.mutation<any, number>({
            query: (id) => ({
                url: `users-archive/${id}/`,
                method: 'patch'
            }),
        }),
    })
})

export const { useCreateUserMutation, useGetProductsQuery, useUpdateUserMutation, useDeleteUserMutation } = productsApi