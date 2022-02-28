import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="h-16 flex-1 ">
      <Link
        to="/"
        className="text-2xl font-bold h-full flex items-center text-green-600 "
      >
        Bazar.<span className="text-orange-500">com</span>
      </Link>
    </div>
  );
};

export default Logo;
