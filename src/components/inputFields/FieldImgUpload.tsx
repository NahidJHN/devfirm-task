import React from "react";
import { BsUpload } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

type PopsTypes = {
  imgState: string;
  setImgState: (imgState: any) => void;
};

const FieldImgUpload = ({ imgState, setImgState }: PopsTypes) => {
  return (
    <div className="w-full relative">
      <h4 className="capitalize font font-semibold ">Plane image</h4>
      <label
        htmlFor="plane-img"
        className={`flex flex-col  my-3 items-center justify-center border border-gray-300   cursor-pointer  hover:bg-gray-100 ${
          imgState ? "rounded-lg" : "border-dashed"
        } `}
      >
        <div className="flex flex-col  z-20 items-center justify-center relative h-24 w-full">
          {imgState ? (
            <div className="z-20 relative rounded-lg flex items-center justify-center text-white bg-black/50 font-medium capitalize h-full w-full">
              <h2>Change</h2>
            </div>
          ) : (
            <h4 className="capitalize flex gap-2 py-5 items-center text-sky-400 font font-medium">
              <BsUpload />
              Upload <br /> plane image
            </h4>
          )}
          {imgState && (
            <Image
              width={100}
              height={100}
              src={URL.createObjectURL(imgState as unknown as Blob)}
              className="absolute rounded-lg top-0 left-0 w-full h-full object-cover z-0"
              alt="upload Img "
            />
          )}
        </div>

        <input
          id="plane-img"
          type="file"
          onChange={({ target: { files } }) =>
            setImgState(files?.length ? files[0] : null)
          }
          className="hidden"
        />
      </label>
      {imgState && (
        <small
          className="absolute rounded-full font-normal p-1 z-50 bg-gray-100 text-gray-400 hover:bg-red-300 hover:text-red-600 shadow top-1/4 -right-2 cursor-pointer"
          onClick={() => setImgState(null)}
        >
          <FaTimes />
        </small>
      )}
    </div>
  );
};

export default FieldImgUpload;
