import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ getFilterData }) => {
  let max = 5;
  let totalStar = Array.from({ length: max }, (_, i) => i);

  return (
    <>
      <h1 className=" text-slate-600 mb-2">Collection </h1>
      <div className=" grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-5 gap-y-4 ">
        {getFilterData.map((item) => {
          return (
            <Link
              to={`/${item.category.replace(/ /g, "-")}/${item.id}`}
              key={item.id}
              className="bg-white w-40 md:w-60 h-full  p-4 flex flex-col  transition-all duration-200 hover:shadow hover:scale-105 rounded cursor-pointer"
            >
              <img
                src={item.image}
                alt="product"
                className="w-24 h-24 md:h-28  mb-3 self-center"
              />
              <div className="text-slate-700">
                <h3 className=" h-16 md:h-11 flex items-center mb-1">
                  {item.title.length > 40
                    ? item.title.slice(0, 40) + "..."
                    : item.title}
                </h3>
                <p className="text-red-500 font-bold mb-1">Tk {item.price}</p>
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <div className="flex">
                  {totalStar.map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                {item.rating.rate}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
