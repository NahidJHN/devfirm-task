"use client";
import { FaUser } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import SearchField from "./inputFields/SearchField";

const Navbar = () => {
  return (
    <nav className="p-3 sticky top-0 shadow z-40 flex items-center justify-between rounded-lg bg-white w-full ">
      <SearchField className="w-24 md:w-56" />
      <div className="flex gap-3 text-gray-500">
        <button className="relative">
          <BiMessageRoundedDetail className="text-3xl" />
          <small className="bg-sky-300 rounded-full px-1 text-xs border-2 border-sky-100 text-white absolute top-0 -right-1">
            4
          </small>
        </button>
        <button className="relative">
          <IoNotificationsOutline className="text-3xl" />
          <small className="bg-orange-300 rounded-full px-1 text-xs border-2 border-orange-100 text-white absolute top-0 -right-2">
            4
          </small>
        </button>
        <button className="p-2 rounded-full bg-primaryColor text-white">
          <FaUser className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
