import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import store from "./store/store";

import Login from "./components/Login";
import Browse from "./components/Browse";
import WatchMovie from "./components/WatchMovie";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/watch/:id",
    element: <WatchMovie />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
