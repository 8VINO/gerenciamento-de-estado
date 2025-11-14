import { CarrinhoProvider } from "./carrinhoContext";
import Home from "./Home";

export default function AppContext() {
  return (
    <CarrinhoProvider>
      <Home />
    </CarrinhoProvider>
  );
}
