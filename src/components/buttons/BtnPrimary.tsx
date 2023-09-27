"use client";
import React from "react";

type PropsType = {
  className?: string;
  onclickHandler?: () => void;
  children: React.ReactNode;
};

const BtnPrimary = ({ children, className, onclickHandler }: PropsType) => {
  return (
    <button
      className={`${className} py-2 px-4 bg-primaryColor text-sm md:text-xl text-white hover:bg-primaryHoverColor rounded-full`}
      onClick={onclickHandler}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
