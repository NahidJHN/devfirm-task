import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useDetectClickOutside } from "react-detect-click-outside";

{
  /* <Link href="/">
<li className="flex items-center gap-6  hover:bg-primaryHoverColor hover:text-white py-3  md:pr-5 rounded-r-none rounded-3xl gap-2 w-[200px]">
  <div>
    <BiHomeAlt className="text-xl" />
  </div>
  <div>dashboard</div>
</li>
</Link> */
}

type PropTypes = {
  label?: string;
  optionValues: string[];
  className?: string;
  optionSingleValueState: string;
  setOptionSingleValueState: (value: string) => void;
  rounded?: string;
};

const SelectField = ({
  label,
  optionValues,
  className,
  optionSingleValueState,
  setOptionSingleValueState,
  rounded,
}: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useDetectClickOutside({ onTriggered: () => setIsOpen(false) });

  return (
    <div
      ref={ref}
      className={`flex items-start relative flex-col gap-2  ${className}`}
    >
      {label && (
        <h4 className="capitalize font font-semibold text-lg">{label}</h4>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`${
          rounded === "full" ? "rounded-full" : "rounded"
        } w-full border text-left text-gray-400 font-medium border-gray-300 py-2 gap-2 px-4 cursor-pointer focus:border-orange-400 focus:outline-none active:border-orange-400 flex justify-between items-center capitalize`}
      >
        {optionSingleValueState}
        <FaAngleDown
          className={`transition-all text-xl ${isOpen && "rotate-180"}`}
        />
      </button>
      {isOpen && (
        <div
          className={`${
            rounded === "full" ? "rounded-xl" : "rounded"
          } flex flex-col w-full absolute top-[115%] z-50 bg-white text-gray-400 font-m border border-gray-300 py-2 cursor-pointer focus:border-orange-400 focus:outline-none overflow-y-auto max-h-56 active:border-orange-400 transition-all `}
        >
          {optionValues?.map((option, index) => (
            <button
              className="capitalize py-2 px-4  text-left outline-none rounded hover:text-orange-400 hover:bg-gray-200"
              key={index}
              value={option}
              onClick={() => {
                setOptionSingleValueState(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectField;
