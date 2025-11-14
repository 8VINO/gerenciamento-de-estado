import { create } from "zustand";

export const useCarrinhoStore = create((set) => ({
  quantidade: 0,
  valorTotal: 0,

  addItem: ({ quantidade, valorItem }) =>
    set((state) => ({
      quantidade: state.quantidade + quantidade,
      valorTotal: state.valorTotal + valorItem,
    })),
}));
