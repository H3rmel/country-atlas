import { createBrowserRouter } from "react-router-dom";

import { Country, Error, Home, NotFound } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/country/:name",
    element: <Country />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <Error />,
  },
]);
