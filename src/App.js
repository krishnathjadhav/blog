import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Main from "./Components/Main";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import Register from "./Components/Regitration";
import AdminDashboard from "./Components/AdminDashboard";
import UserDashboard from "./Components/UserDashboard";
import Cart from "./Components/Cart";
import AddToCart from "./Components/AddToCart";
import CartItems from "./Components/CartItems";
import Category from "./Components/Category";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/userdashboard",
    element: <UserDashboard />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/addtocart",
    element: <AddToCart />,
  },
  {
    path: "/cartitems",
    element: <CartItems />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);

export default App;
