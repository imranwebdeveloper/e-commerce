import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/card/ProductCard";

const BrandFilter = ({ category }) => {
  const filterData = useSelector((state) => state.content.product);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filterData === "All") {
      setData(category);
    } else {
      const getData = category.filter((item) => {
        return item.category.replace(/ /g, "-") === filterData;
      });
      setData(getData);
    }
  }, [filterData, category]);

  return (
    <main className="p-4">
      <section className="container mx-auto">
        <ProductCard getFilterData={data} />
      </section>
    </main>
  );
};

export default BrandFilter;
