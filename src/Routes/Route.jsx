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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/add-products",
        element: <AddProducts />,
      },
      {
        path: "/brand-products/:brand",
        element: <BrandProducts />,
        loader: () => fetch("http://localhost:5000/products/"),
      },

      {
        path: "/:brand/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/update-product",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
