import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
  quantidade: 0,
  valorTotal: 0,
};

export const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: estadoInicial,
  reducers: {
    addItem: (state, action) => {
      state.quantidade += action.payload.quantidade;
      state.valorTotal += action.payload.valorItem;
    },
  },
});

export const { addItem } = carrinhoSlice.actions;
export const carrinhoReducer = carrinhoSlice.reducer;