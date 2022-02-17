import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Details = ({ productDetailsData }) => {
  const [useProduct, setProduct] = useState([]);

  const getURL = useParams();

  useEffect(() => {
    const getDetails = productDetailsData.filter((item) => {
      return item.id.toString() === getURL.details;
    });
    setProduct(getDetails);
  }, [getURL, productDetailsData]);
  console.log(getURL);
  return (
    <main className="">
      {useProduct.map((item, index) => {
        return (
          <div
            key={index}
            className="container mx-auto bg-white grid md:grid-cols-2 gap-2 p-4 shadow-lg"
          >
            <section className="p-4">
              <img
                src={item.image}
                alt="img"
                className=" h-52 md:h-72 mx-auto "
              />
              <h3 className="text-2xl font-bold text-slate-700">
                {item.title}.
              </h3>
              <div className="flex gap-2 text-orange-400 text-lg font-bold items-center ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p>({item.rating.count})</p>
              </div>
              <h2 className="font-bold  text-red-700 text-2xl">
                Tk {item.price} /=
              </h2>
            </section>
            <section className="p-4 flex flex-col ">
              <div className=" flex-1">
                <h3 className="text-2xl font-bold text-slate-700 mb-3">
                  Product Details of {item.title}.
                </h3>
                <div className="flex items-center gap-2 ">
                  Category :
                  <Link
                    to={`/${item.category.replace(/ /g, "-")}`}
                    className="text-blue-600"
                  >
                    {item.category.replace(
                      /^./,
                      item.category[0].toUpperCase()
                    )}
                  </Link>
                </div>
                <p className="mb-4">
                  <strong>Description :</strong> {item.description}
                </p>
              </div>

              <div className=" flex gap-4 self-end">
                <button className=" px-4 py-1 bg-green-800 text-white font-bold hover:bg-green-700">
                  Buy Now
                </button>
                <button className="  px-4 py-1 bg-red-500 text-white font-bold hover:bg-red-400">
                  Add to Cart
                </button>
              </div>
            </section>
          </div>
        );
      })}
    </main>
  );
};

export default Details;
