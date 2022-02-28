import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="  w-3/5 bg-slate-100 ">
      <div className="center-b h-10  ">
        <input
          type="text"
          className="bg-transparent w-full p-4 outline-none font-semibold text-sm"
          name="search"
          placeholder="Search in Bazar"
        />
        <button className=" bg-orange-500 text-white text-xl w-12 h-full center">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
