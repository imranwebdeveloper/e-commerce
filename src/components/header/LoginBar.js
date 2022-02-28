import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const LoginBar = () => {
  return (
    <div className="hidden md:flex flex-1  justify-end gap-4 text-gray-600  ">
      <button className="text-3xl">
        <BsCart3 />
      </button>
      <div className="center-b gap-1">
        <Link
          to="/register"
          className=" hover:text-emerald-700 px-1 text-sm font-bold uppercase "
        >
          Signup
        </Link>
        <Link
          to="/login"
          className=" hover:text-emerald-700 px-1 text-sm font-bold uppercase "
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default LoginBar;
