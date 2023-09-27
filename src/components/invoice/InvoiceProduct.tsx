import { useState } from "react";
import SelectField from "../inputFields/SelectField";
import ActionBtn from "../buttons/ActionButton";

import InputField from "../inputFields/InputField";
import BtnPrimary from "../buttons/BtnPrimary";
import BtnOutline from "../buttons/BtnOutline";

const fruits = [
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
  "potato",
  "ladies finger",
];

const InvoiceProduct = () => {
  const [optionSingleValue, setOptionSingleValue] = useState(fruits[0]);

  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl p-4 gap-3  flex justify-between">
      <div className="bg-white mt-5 py-5 rounded-lg ">
        <table className="text-left capitalize">
          <thead>
            <tr>
              <th className="px-2 py-3">products type</th>
              <th className="px-2 py-3">products</th>
              <th className="px-2 py-3">description </th>
              <th className="px-2 py-3">total</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-gray-500 border-t-[.1px] border-gray-200">
              <td className="pr-3 py-5">
                <SelectField
                  className="md:w-56"
                  optionSingleValueState={optionSingleValue}
                  setOptionSingleValueState={setOptionSingleValue}
                  optionValues={fruits}
                />
              </td>
              <td className="pr-3 py-5">
                <SelectField
                  className="md:w-56"
                  optionSingleValueState={optionSingleValue}
                  setOptionSingleValueState={setOptionSingleValue}
                  optionValues={fruits}
                />
              </td>
              <td className="pr-4 py-5">
                <InputField
                  className="md:w-96"
                  inputPlaceholder="Description"
                />
              </td>
              <td>
                <div className="flex gap-2 items-center ">
                  <InputField
                    className="w-28"
                    inputType="number"
                    inputPlaceholder="Total"
                  />
                  <ActionBtn variant="delete" />
                </div>
              </td>
            </tr>
            <tr className="text-gray-500 border-t-[.1px] border-gray-200">
              <td className="py-5">
                <button className="font-medium text-primaryColor">
                  + Add Product
                </button>
              </td>
            </tr>
            <tr className="text-gray-500 border-t-[.1px] border-gray-200">
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className="flex justify-between items-center">
                  <h5 className="font-bold">Subtotal: </h5>
                  <p>0.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="font-bold">TVA: </h5>
                  <p>0.00</p>
                </div>
              </td>
            </tr>
            <tr className="text-gray-500 border-t-[.1px] border-gray-200">
              <td className="py-3">
                <div className="flex gap-2 items-center">
                  <BtnPrimary>Save</BtnPrimary>
                  <BtnOutline>Cancel</BtnOutline>
                </div>
              </td>
              <td>
                <BtnPrimary>Download Invoice</BtnPrimary>
              </td>
              <td></td>

              <td>
                <div className="flex justify-between items-center text-primaryColor">
                  <h5 className="font-bold">Total: </h5>
                  <p>0.00</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceProduct;
