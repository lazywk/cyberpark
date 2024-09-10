import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import users from './users/usersSlice'
import { usersApi } from './users/usersApi'

import { productsApi } from './products/productsApi'
import products from './products/productsSlice'
import { postsApi } from './posts/postsApi'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        users,
        products
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            usersApi.middleware,
            productsApi.middleware,
            postsApi.middleware
        ),
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector