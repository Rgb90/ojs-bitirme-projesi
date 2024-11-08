import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, Root, Contact, Account, ProductList, ProductDetail } from "./routes"
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
        path: "/productlist",
        element: <ProductList />,
      },
      {
        path: "/productdetail",
        element: <ProductDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/account",
        element: <Account />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
