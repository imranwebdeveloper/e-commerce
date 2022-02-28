import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Category from "../components/categoryBar/Category";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Section from "../components/UI/Section";

const Details = ({ productData }) => {
  const [useProduct, setProduct] = useState([]);

  const getURL = useParams();

  useEffect(() => {
    const getDetails = productData.filter((item) => {
      return item.id.toString() === getURL.details;
    });
    setProduct(getDetails);
  }, [getURL, productData]);
  return (
    <>
      <Header />
      <Category category={productData} />
      <main>
        <Section bg>
          {useProduct.map((item, index) => {
            return (
              <div key={index} className=" grid md:grid-cols-2 gap-2 ">
                <section className="">
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
                <section className=" flex flex-col ">
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
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Details;
