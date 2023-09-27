import React from "react";
import { FaSearch } from "react-icons/fa";

type PropsTypes = {
  className: string;
};

const SearchField = ({ className }: PropsTypes) => {
  return (
    <div
      className={`flex items-center relative p-2 pl-4 rounded-3xl gap-2 border ${className}`}
    >
      <FaSearch className="text-xl absolute  left-2 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none focus:outline-none border-none ml-4"
      />
    </div>
  );
};

export default SearchField;
