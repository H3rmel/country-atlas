import { createBrowserRouter } from "react-router-dom";

import { About, Country, Error, Home, NotFound } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/country/:code",
    element: <Country />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <Error />,
  },
]);
