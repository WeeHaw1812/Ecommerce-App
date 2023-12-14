import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./modules/Home/Home";
import Product from "./modules/Product/Product";
import Products from "./modules/Products/Products";
import Footer from "./components/Footer/Footer";
import CategoryProduct from "./components/CategoryProduct/CategoryProduct";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories/:type" element={<CategoryProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
