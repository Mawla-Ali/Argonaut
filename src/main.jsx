import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error.jsx";
import ProductPage from "./pages/products.jsx";
import Hero from "./pages/landing.jsx";
import LandingPage from "./pages/landing.jsx";

const router = createBrowserRouter([
  {
    path: "/argonaut/",
    element: <LandingPage />,
    errorElement: <ErrorPage></ErrorPage>,
  },

  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />,
  // },
  // {
  //   path: "/products",
  //   element: <ProductPage />,
  // },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
