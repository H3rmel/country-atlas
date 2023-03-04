import { createBrowserRouter } from "react-router-dom";

import { About, Country, Home, NotFound } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country",
    element: <Country />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
