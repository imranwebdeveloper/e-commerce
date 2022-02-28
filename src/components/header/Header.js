import React from "react";
import LoginBar from "./LoginBar";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="  bg-white shadow px-4 md:px-8  lg:px-12">
      <div className=" container mx-auto gap-8 center-b">
        <Logo />
        <SearchBox />
        <LoginBar />
      </div>
    </header>
  );
};

export default Header;
