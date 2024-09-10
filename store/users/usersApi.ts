import httpBaseQuery from '@/utils/http'
import { createApi } from '@reduxjs/toolkit/query/react'

export const userssApi = createApi({
    reducerPath: 'userssApi',
    baseQuery: httpBaseQuery(),
    endpoints: (builder) => ({
        getUsers: builder.query<any[], string>({
            query: () => ({
                url: 'users-list/',
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

export const { useCreateUserMutation, useGetUsersQuery, useUpdateUserMutation, useDeleteUserMutation } = userssApi