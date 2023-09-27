"use client";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { sideBarData } from "./custom-data/sidebar-data";
import { useState } from "react";

type PropsType = {
  setIsOpenSidebar: any;
  isOpenSidebar: boolean;
};

const Sidebar = ({ setIsOpenSidebar, isOpenSidebar }: PropsType) => {
  const [activeSubMenu, setActiveSubMenu] = useState<{
    active: boolean;
    parent: string | undefined;
  }>({
    active: false,
    parent: "",
  });

  const handleActiveMenu = (parent: string) => () => {
    if (activeSubMenu.active && activeSubMenu.parent === parent) {
      return setActiveSubMenu({ active: false, parent: "" });
    }
    setActiveSubMenu({ active: true, parent });
  };
  return (
    <div
      className={`bg-primaryColor flex flex-col rounded-r-lg py-4 h-screen text-gray-300 transition-all relative ${
        !isOpenSidebar ? "w-fit" : "w-16"
      }`}
    >
      <button
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        className="p-3 bg-primaryHoverColor text-white block absolute right-0 top-2"
        title="close"
      >
        {isOpenSidebar ? (
          <AiOutlineArrowRight className="text-xl" />
        ) : (
          <AiOutlineArrowLeft className="text-xl" />
        )}
      </button>
      {!isOpenSidebar && (
        <h2 className="text-3xl font-semibold text-center uppercase">logo</h2>
      )}

      {!isOpenSidebar ? (
        <ul className="space-y-3 md:ml-6 mt-4 md:pl-4 text-md  h-full text-gray-200 uppercase">
          {sideBarData.map((item) => {
            if (!item.hasChildren) {
              return (
                <Link key={item.path} href={item.path as string}>
                  <li className="flex items-center hover:bg-primaryHoverColor hover:text-white py-3  md:pr-5 rounded-r-none rounded-3xl gap-2 w-[200px]">
                    {item.icon}
                    {item.title}
                  </li>
                </Link>
              );
            }

            if (item.hasChildren) {
              return (
                <>
                  <li
                    onClick={handleActiveMenu(item.parent as string)}
                    className="flex items-center flex-col justify-between cursor-pointer"
                  >
                    <div className="hover:text-white hover:bg-primaryHoverColor hover:text-white py-3 md:pr-5 rounded-r-none rounded-3xl gap-4 w-full">
                      <div className="flex items-center gap-1">
                        <div>{item.icon}</div>
                        <div>{item.title}</div>
                        <div className="ml-6">
                          <FaAngleDown />
                        </div>
                      </div>
                    </div>
                    {item.children?.map((child) => {
                      if (activeSubMenu.parent !== item.parent) return null;
                      return (
                        <ul
                          key={child.path}
                          className="space-y-3 md:pl-4 text-md  text-gray-200 uppercase w-full"
                        >
                          <Link href={child.path as string}>
                            <li className="flex items-center hover:bg-primaryHoverColor hover:text-white  rounded-r-none rounded-3xl p-3 gap-2">
                              {child.icon}
                              {child.title}
                            </li>
                          </Link>
                        </ul>
                      );
                    })}
                  </li>
                </>
              );
            }
          })}
        </ul>
      ) : (
        <ul className="text-lg  h-full text-gray-200 uppercase flex flex-col justify-center items-center gap-8">
          {sideBarData.map((item) => {
            return (
              <Link key={item.path} href={item.path || ""}>
                <li className="hover:bg-primaryHoverColor hover:text-white rounded-r-none rounded-3xl">
                  {item.icon}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
