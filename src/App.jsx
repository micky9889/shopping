import React, { useState } from "react";
import Nav from "./components/Nav";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import Boy from "./pages/Boy";
import Girl from "./pages/Girl";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
const App = () => {
  return (
    <>
      <div className="container mx-auto py-4">
        <Nav />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/boy" element={<Boy />} />
          <Route path="/girl" element={<Girl />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
