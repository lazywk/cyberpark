// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const appProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
    },
})

export const {
    setProducts
} = appProductsSlice.actions


export default appProductsSlice.reducer
