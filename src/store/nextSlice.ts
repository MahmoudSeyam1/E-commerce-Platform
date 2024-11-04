/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "../../type";

interface NextState {
    productData: StoreProduct[];
    favoriteData: StoreProduct[];
    allProduct: StoreProduct[];
    userInfo: null | string;
}

const initialState: NextState = {
    productData: [],
    favoriteData: [],
    allProduct: [],
    userInfo: null,
};

export const nextSlice = createSlice({
    name: 'next',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.productData.find((item: StoreProduct) => item._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        addToFavorite: (state, action) => {
            const existingProduct = state.favoriteData.find((item: StoreProduct) => item._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.favoriteData.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find((item: StoreProduct) => item._id === action.payload._id);
            if (existingProduct) existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find((item: StoreProduct) => item._id === action.payload._id);
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity = 1;
            }else {
                existingProduct! .quantity--;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter((item) => item._id !== action.payload);
        },
        resetCart: (state) => {
            state.productData = [];
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
        setAllProduct: (state, action) => {
            state.allProduct = action.payload;
        },
    },
});

export const { addToCart, addToFavorite, increaseQuantity, decreaseQuantity, deleteProduct, resetCart, addUser, removeUser, setAllProduct } = nextSlice.actions;
export default nextSlice.reducer;
