import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import store from "./store";

import Login from "./components/Login";
import Browse from "./components/Browse";
import Body from "./components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Body />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
