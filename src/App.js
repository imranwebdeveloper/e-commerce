import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./components/categoryBar/Category";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import BrandFilter from "./pages/BrandFilter";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { products } from "./store/product";

const App = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(products);
  }, [productData]);

  return (
    <div>
      <Header />
      <Category category={productData} />
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        <Route
          path="/:brand"
          element={<BrandFilter category={productData} />}
        />
        <Route
          path="/:brand/:details"
          element={<Details productDetailsData={productData} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
