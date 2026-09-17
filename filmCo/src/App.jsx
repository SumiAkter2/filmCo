import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import NotFound from "./Pages/NotFound";
import ComingSoon from "./Pages/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "popular",
        element: <ComingSoon />,
      },
      {
        path: "tv-shows",
        element: <ComingSoon />,
      },
      {
        path: "trending",
        element: <ComingSoon />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
