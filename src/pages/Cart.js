import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Section from "../components/UI/Section";
import img from "../assert/img/product/1.jpg";

const Cart = () => {
  return (
    <>
      <Header />
      <main className="mt-2 text-gray-600">
        <Section>
          <h2 className="text-3xl text-center   ">Shopping Cart</h2>
          <div className="mt-6  flex flex-col gap-4  lg:flex-row">
            <table className=" shadow  w-full text-sm bg-white ">
              <thead className="border-y ">
                <tr className="  bg-gray-100 uppercase ">
                  <th className="p-1">Product</th>
                  <th className="p-1">Price</th>
                  <th className="p-1"> Quantity</th>
                  <th className="p-1">Total</th>
                </tr>
              </thead>
              <tbody className="font-bold ">
                <tr className="border-b ">
                  <td>
                    <section className="flex flex-col md:flex-row items-center p-3 gap-4 ">
                      <div>
                        <img src={img} alt="img" width={80} />
                      </div>
                      <div>
                        <h3 className=" mb-1">iPhone 12 pro</h3>
                        <button className="text-red-700   ">Remove</button>
                      </div>
                    </section>
                  </td>
                  <td className="text-center"> 1252 Tk</td>
                  <td>
                    <section className="w-28 mx-auto  p-2 flex flex-col md:flex-row justify-center items-center gap-4 ">
                      <span className=" px-3 cursor-pointer">-</span>
                      <span>1</span>
                      <span className=" px-3 cursor-pointer">+</span>
                    </section>
                  </td>
                  <td className="text-center">1252 Tk</td>
                </tr>
                <tr className="border-b ">
                  <td>
                    <section className="flex flex-col md:flex-row items-center p-3 gap-4 ">
                      <div>
                        <img src={img} alt="img" width={80} />
                      </div>
                      <div>
                        <h3 className=" mb-1">iPhone 12 pro</h3>
                        <button className="text-red-700   ">Remove</button>
                      </div>
                    </section>
                  </td>
                  <td className="text-center"> 1252 Tk</td>
                  <td>
                    <section className="w-28 mx-auto  p-2 flex flex-col md:flex-row justify-center items-center gap-4 ">
                      <span className=" px-3 cursor-pointer">-</span>
                      <span>1</span>
                      <span className=" px-3 cursor-pointer">+</span>
                    </section>
                  </td>
                  <td className="text-center">1252 Tk</td>
                </tr>
              </tbody>
            </table>

            <section className="bg-white p-6 shadow  flex justify-center text-sm ">
              <div className="  flex flex-col w-full ">
                <h2 className="text-2xl text-center mb-4">Payment Info</h2>
                <div className="flex-1 flex flex-col  md:w-72 ">
                  <div className="flex-1 border-b">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">Product Price</h3>
                      <span className="font-semibold">1252 Tk</span>
                    </div>
                    <div className="flex justify-between">
                      <h3>Taxed</h3>
                      <span>00.00 Tk</span>
                    </div>
                    <div className="flex justify-between">
                      <h3>Shipping Cost</h3>
                      <span>00.00 Tk</span>
                    </div>
                  </div>
                  <div className="flex justify-between  font-bold ">
                    <h3>Grand Total</h3>
                    <span>00.00 Tk</span>
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 w-2/3 mt-3 self-center ">
                  Check Out
                </button>
              </div>
            </section>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
