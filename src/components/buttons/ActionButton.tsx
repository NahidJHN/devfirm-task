/* eslint-disable react/prop-types */
import { BiSolidEditAlt, BiSolidTrashAlt } from "react-icons/bi";

const ActionBtn = (props: { variant: string }) => {
  const { variant } = props;
  return (
    <button
      type="button"
      className={`rounded-md p-2 capitalize text-xl ${
        variant === "delete"
          ? "bg-red-100 hover:bg-red-300"
          : "bg-blue-100 hover:bg-blue-300"
      }`}
    >
      {variant === "delete" ? (
        <BiSolidTrashAlt className="text-red-600 " />
      ) : (
        <BiSolidEditAlt className="text-blue-600 " />
      )}
    </button>
  );
};

export default ActionBtn;
