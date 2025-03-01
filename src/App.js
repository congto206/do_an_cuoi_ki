import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import CeilingAC from "./pages/CeilingAC";  // Điều hòa âm trần
import SplitAC from "./pages/SplitAC";      // Điều hòa treo tường
import WindowAC from "./pages/WindowAC";    // Điều hòa cửa sổ

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
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
