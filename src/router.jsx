import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import App from "./App";
import Cart from "./Component/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
  {
    path: "/cart",
    element: <Provider store={store}>
        <Cart />
      </Provider>,
  },
]);
