import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Promo from './components/Promo';
import ProductCategory from './components/pages/ProductCategory';
import Product from './components/pages/Product';
import Signin from "./components/Signin";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductContextProvider from './components/Context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>                       {/* Wrap your App with BrowserRouter */}
    <ProductContextProvider>          {/* Place ProductContextProvider here to cover all components */}
      <div id="title-section">
        <Header />
        <Navbar />
        <Promo />
      </div>
      <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/facialcare" element={<ProductCategory category="Face" />} />
          <Route path="/mencare" element={<ProductCategory category="Men" />} />
          <Route path="/skincare" element={<ProductCategory category="Skin" />} />
          <Route path="/bestseller" element={<ProductCategory category="Best" />} />
          <Route path="/bath&body" element={<ProductCategory category="Body" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </React.StrictMode>
      <div id="footer-section">
        <Footer />
      </div>
    </ProductContextProvider>
  </BrowserRouter>
);
