import ProductCard from "../components/card/ProductCard";
import Category from "../components/categoryBar/Category";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HomeSlider from "../components/slider/HomeSlider";
import Section from "../components/UI/Section";

const Product = ({ productData }) => {
  return (
    <>
      <Header />
      <Category category={productData} />
      <main className="">
        <div className="container mx-auto mb-2">
          <HomeSlider />
        </div>
        <Section bg>
          <ProductCard getFilterData={productData} />
        </Section>
      </main>
      <Footer />
    </>
  );
};
export default Product;
