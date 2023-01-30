import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        },
    }
});

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer