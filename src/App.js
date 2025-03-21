import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import CeilingAC from "./pages/CeilingAC";  // Điều hòa âm trần
import SplitAC from "./pages/SplitAC";      // Điều hòa treo tường
import WindowAC from "./pages/WindowAC";    // Điều hòa cửa sổ
import BestsellingAC from "./pages/BestsellingAC"; 
import ContactPage from "./pages/ContactPage"; // Trang liên hệ
import About from "./pages/about"; // Trang giới thiệu
import Checkout from "./pages/Checkout"; // Trang thanh toán
import CartPage from "./pages/CartPage";

// Thêm các trang Đăng nhập và Đăng ký
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <CartProvider> {/* Bọc toàn bộ ứng dụng trong CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Các trang điều hòa */}
          <Route path="/products/split" element={<SplitAC />} />
          <Route path="/products/ceiling" element={<CeilingAC />} />
          <Route path="/products/window" element={<WindowAC />} />
          <Route path="/products/best" element={<BestsellingAC />} />
          {/* Trang liên hệ */}
          <Route path="/contact" element={<ContactPage />} />
          {/* Trang Giới thiệu */}
          <Route path="/about" element={<About />} />
          {/* Trang Thanh toán & Giỏ hàng */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Trang Đăng nhập & Đăng ký */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
