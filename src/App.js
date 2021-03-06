import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import BrandFilter from "./pages/BrandFilter";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { products } from "./store/product";
import Cart from "./pages/Cart";

const App = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(products);
  }, [productData]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/:brand"
          element={<BrandFilter productData={productData} />}
        />
        <Route
          path="/:brand/:details"
          element={<Details productData={productData} />}
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
