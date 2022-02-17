import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-white shadow">
      <div className=" container mx-auto flex items-center py-3">
        <div className="w-40">
          <Link to="/" className="text-2xl">
            Bazar
          </Link>
        </div>
        <nav className="w-full ">
          <ul className="flex justify-end gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
