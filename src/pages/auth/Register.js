import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Input from "../../components/form/Input";
import Header from "../../components/header/Header";
import Section from "../../components/UI/Section";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Register = () => {
  const fromHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <Header />
      <main>
        <Section>
          <div className=" md:w-[500px] bg-white p-6 mx-auto shadow rounded">
            <div className=" text-center py-4  text-gray-600">
              <h2 className="text-3xl  ">Create your Bazar Account</h2>
              <p className="text-sm">
                Already member?
                <Link to="login" className="text-emerald-700 px-1">
                  Login
                </Link>
                here
              </p>
            </div>
            <form onSubmit={fromHandler} className="   text-gray-600 gap-4">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your first & last name"
              />
              <Input
                label="Phone Number"
                type="text"
                name="phoneNumber"
                placeholder="Please enter your phone number"
              />
              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Minimum 6 characters with a number and a letter"
              />
              <div className="flex gap-2">
                <Input label="Date of Birth" type="date" name="dateOfBirth" />
                <div className="input-warper flex-1">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="py-[9px]  bg-white border"
                  >
                    <option value="male"> Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center py-2 ">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  className="mr-2  w-4"
                />
                <p className="text-sm">
                  I want to receive exclusive offers and promotions from Bazar.
                </p>
              </div>
              <div className="flex  items-center pb-4">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  className="mr-2 w-4 self-start mt-1"
                />
                <p className="text-sm">
                  By clicking “SIGN UP”, I agree to Bazar's
                  <Link to="/" className="text-emerald-600 px-1 inline-block">
                    Terms of Use
                  </Link>
                  and
                  <Link to="/" className="text-emerald-600 px-1 inline-block">
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500  btn hover:bg-blue-400"
              >
                Sign up
              </button>
            </form>
            <div className="pt-4">
              <p className="pb-1 text-gray-600 text-sm">Or, signup with</p>
              <div className="flex gap-2 ">
                <button type="button" className="flex-1 bg-[#D34836] btn ">
                  <FaGoogle />
                  Google
                </button>
                <button type="button" className="flex-1 bg-[#3B5998] btn ">
                  <FaFacebookF />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Register;
