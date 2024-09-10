// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: []
}

export const appUsersSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
    },
})

export const {
    setUsers
} = appUsersSlice.actions


export default appUsersSlice.reducer
