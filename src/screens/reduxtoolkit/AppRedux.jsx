import Home from "./Home";


import { Provider } from "react-redux";
import { store } from "./Store";


export default function AppRedux() {
  return (
    <Provider store={store}>
        <Home/>
    </Provider>
  );
}
