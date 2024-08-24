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
import AuthContext from "./Contexts/AuthContext";
import { useState } from "react";
import Error from "./Components/Error";

function App() {
  const [authToken, setAuthToken] = useState("");

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/",
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
  {
    path: "/error",
    element: <Error />,
  },
]);

export default App;
