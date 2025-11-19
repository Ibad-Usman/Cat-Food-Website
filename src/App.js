import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Subscription from "./pages/Subscription";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/cat-food-products" element={<Product/>}/>
          <Route path="/cat-food-subscription" element={<Subscription/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
