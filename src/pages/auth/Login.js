import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Input from "../../components/form/Input";
import Header from "../../components/header/Header";
import Section from "../../components/UI/Section";

const Login = () => {
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
              <h2 className="text-3xl  ">Welcome to Bazar! Please login.</h2>
              <p className="text-sm">
                New member?
                <Link to="login" className="text-emerald-700 px-1">
                  Register
                </Link>
                here
              </p>
            </div>
            <form onSubmit={fromHandler} className="   text-gray-600 gap-4">
              <Input
                label="Enter Email or phone number"
                type="text"
                name="name"
                placeholder="Enter email or phone number"
              />

              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />

              <button
                type="submit"
                className="w-full bg-blue-500  btn hover:bg-blue-400"
              >
                Login
              </button>
            </form>
            <div className="pt-4">
              <p className="pb-1 text-gray-600 text-sm">Or, login with</p>
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

export default Login;
