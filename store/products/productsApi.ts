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
    })
})

export const { useGetProductsQuery } = productsApi