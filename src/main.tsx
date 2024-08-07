import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, Root, CartPage, AccountPage } from "./routes"
import "./index.css"




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
      index: true,
      element: <HomePage />
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
