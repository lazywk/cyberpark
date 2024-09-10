import { PostsResponse } from '@/types/posts'
import httpBaseQuery from '@/utils/http'
import { createApi } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: httpBaseQuery(),
    endpoints: (builder) => ({
        getPosts: builder.query<PostsResponse, string>({
            query: (params) => ({
                url: `posts?${params}`,
                method: 'get',
            }),
        })
    })
})

export const { useGetPostsQuery } = postsApi