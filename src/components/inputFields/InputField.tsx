import React from "react";

type PropsTypes = {
  className?: string;
  inputLabel?: string;
  inputType?: string;
  inputPlaceholder?: string;
  rounded?: string;
};

const InputField = ({
  className,
  inputLabel,
  inputType,
  inputPlaceholder,
  rounded,
}: PropsTypes) => {
  return (
    <div className={className}>
      {inputLabel && (
        <label
          className="capitalize font font-semibold text-lg"
          htmlFor={inputLabel}
        >
          {inputLabel}
        </label>
      )}

      <input
        id={inputLabel}
        type={inputType || "text"}
        placeholder={inputPlaceholder}
        className={`${
          rounded === "full" ? "rounded-full" : "rounded-lg"
        } border text-left text-gray-400 font-medium border-gray-300 py-2 gap-2 px-4  focus:border-orange-400 focus:outline-none active:border-orange-400 flex justify-between items-center capitalize w-full`}
      />
    </div>
  );
};

export default InputField;
