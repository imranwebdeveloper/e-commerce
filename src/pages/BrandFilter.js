import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/card/ProductCard";
import Category from "../components/categoryBar/Category";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const BrandFilter = ({ productData }) => {
  const filterData = useSelector((state) => state.content.product);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filterData === "All") {
      setData(productData);
    } else {
      const getData = productData.filter((item) => {
        return item.category.replace(/ /g, "-") === filterData;
      });
      setData(getData);
    }
  }, [filterData, productData]);

  return (
    <>
      <Header />
      <Category category={productData} />
      <main className="p-4">
        <div className="container mx-auto">
          <ProductCard getFilterData={data} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandFilter;
