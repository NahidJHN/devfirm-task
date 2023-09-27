import React, { PropsWithChildren } from "react";

const BtnOutline = ({ children }: PropsWithChildren) => {
  return (
    <button className="py-2 px-3 text-sm md:text-xl hover:border-primaryColor hover:text-primaryColor transition-all rounded-full border border-gray-300">
      {children}
    </button>
  );
};

export default BtnOutline;
