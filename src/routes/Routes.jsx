import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Nike from "../products/brands/Nike";
import Adidas from "../products/brands/Adidas";
import Puma from "../products/brands/Puma";
import Converse from "../products/brands/Converse";
import Rebook from "../products/brands/Rebook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Navigate to="/nike" replace />,
      },
      {
        path: "nike",
        element: <Nike />,
      },
      {
        path: "adidas",
        element: <Adidas />,
      },
      {
        path: "puma",
        element: <Puma />,
      },
      {
        path: "reebok", 
        element: <Rebook />,
      },
      {
        path: "converse",
        element: <Converse />,
      },
    ],
  },
]);

export default router;
