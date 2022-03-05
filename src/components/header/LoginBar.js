import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const LoginBar = () => {
  return (
    <div className="hidden md:flex flex-1  justify-end gap-4 text-gray-600  ">
      <Link to="/cart" className="text-3xl ">
        <div className="relative">
          <span>
            <BsCart3 />
          </span>
          <span className="absolute -top-1 -right-1 bg-red-600 text-xs w-4 h-4 text-white p-[2px] font-bold rounded-[50%] center">
            5
          </span>
        </div>
      </Link>
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
