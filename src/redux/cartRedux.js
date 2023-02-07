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



        incrementQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            item.quantity++;
          },
          decrementQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },

    }
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer