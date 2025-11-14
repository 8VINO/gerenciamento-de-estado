import { configureStore } from "@reduxjs/toolkit";
import { carrinhoReducer, addItem } from "./features/carrinho/carrinho-slice";

export const store = configureStore({
    reducer:{
        carrinho: carrinhoReducer
    }
})