import React from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import NoPage from "./pages/noPage/NoPage";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/cartPage";
import AllProductPage from "./pages/allProductPage/AllProductPage";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";


function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/productinfo" element={<ProductInfo />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/allproducts" element={<AllProductPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/updateproduct/:id" element={<UpdateProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
