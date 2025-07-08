import { createBrowserRouter, Navigate } from "react-router-dom";

// Layout
import Main from "../display/Main";

// Sections & Pages
import Home from "../display/Home";
import Cart from "../cart/Cart";
import SupportSection from "../sections/SupportSection";

import HelpCenter from "../pages/HelpCenter";
import ContactUs from "../pages/ContactUs";
import ReturnsPolicy from "../pages/ReturnPolicy";
import Testimonials from "../pages/Testimonials";
import BrandSection from "../pages/BrandSection";
import Catalog from "../sections/Catalog";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },

      // Main sections
      { path: "home", element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "brandshoe", element: <BrandSection /> },
      { path: "reviews", element: <Testimonials /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <ContactUs /> },
      { path: "error", element: <ErrorPage /> },

      {
        path: "support",
        element: <SupportSection />,
        children: [
          { index: true, element: <HelpCenter /> },
          { path: "help", element: <HelpCenter /> },
          { path: "returns", element: <ReturnsPolicy /> },
        ],
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
