import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import AddProducts from "../Pages/AddProducts";
import BrandProducts from "../Pages/BrandProducts";
import ProductDetails from "../Pages/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://automotive-shop-server-9lnykxr8o-mdhossain07.vercel.app/cart"
          ),
      },
      {
        path: "/add-products",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/brand-products/:brand",
        element: <BrandProducts />,
        loader: () =>
          fetch(
            "https://automotive-shop-server-9lnykxr8o-mdhossain07.vercel.app/products"
          ),
      },

      {
        path: "/:brand/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-shop-server-9lnykxr8o-mdhossain07.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-shop-server-9lnykxr8o-mdhossain07.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
