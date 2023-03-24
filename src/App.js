
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Pricing from "./pages/Pricing/Pricing"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Aboutus from "./pages/About us/About"
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import SellerSignup from "./pages/SellerSignup";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const user = false


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
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/pricing/",
        element: <Pricing />,
      },
      {
        path: "/about/",
        element: <Aboutus />,
      },
      {
        path: "/register/",
        element: user ? <Navigate to ="/"/> : <Register />,
      },
      {
        path: "/login/",
        
        element: user ? <Navigate to ="/"/> : <Login />,
      },
      {
        path: "/seller/",
        element: <SellerSignup />,
      },
    
    ],
  },
     
]);


function App() {

  const user = true
  return (
    <div>
<RouterProvider router={router} />
<ToastContainer />
    </div>
  );
}

export default App;
