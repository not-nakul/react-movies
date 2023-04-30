import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/MovieDetails";
import Favorites from "./components/movies/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "/movie/:title",
        element: <MovieDetails />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
