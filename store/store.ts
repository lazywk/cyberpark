import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import users from './users/usersSlice'
import { userssApi } from './users/usersApi'

export const store = configureStore({
    reducer: {
        [userssApi.reducerPath]: userssApi.reducer,
        users,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userssApi.middleware,
        ),
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector