import ProductCard from "../components/card/ProductCard";

const Product = ({ productData }) => {
  return (
    <main className="">
      <section className="container mx-auto">
        <ProductCard getFilterData={productData} />
      </section>
    </main>
  );
};
export default Product;
