import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [estado, setEstado] = useState({
    quantidade: 0,
    valorTotal: 0,
  });

  function addItem({ quantidade, valorItem }) {
    setEstado((prev) => ({
      quantidade: prev.quantidade + quantidade,
      valorTotal: prev.valorTotal + valorItem,
    }));
  }

  return (
    <CarrinhoContext.Provider value={{ estado, addItem }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
