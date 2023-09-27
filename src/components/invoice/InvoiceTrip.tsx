import { useState } from "react";
import SelectField from "../inputFields/SelectField";
import FieldImgUpload from "../inputFields/FieldImgUpload";
import InputField from "../inputFields/InputField";

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

const InvoiceTrip = () => {
  const [optionSingleValue, setOptionSingleValue] = useState(fruits[0]);
  const [img, setImg] = useState(null);

  return (
    <div className="bg-white rounded-xl p-4 gap-3 flex-col md:flex-row flex justify-between">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
        <div className="col-span-2">
          <SelectField
            label="select"
            className="w-full"
            rounded="full"
            optionSingleValueState={optionSingleValue}
            setOptionSingleValueState={setOptionSingleValue}
            optionValues={fruits}
          />
        </div>

        <InputField
          className="flex flex-col gap-2"
          inputLabel="Invoice Date"
          inputType="date"
          rounded="full"
        />

        <SelectField
          rounded="full"
          className="w-full md:w-56"
          label="select"
          optionSingleValueState={optionSingleValue}
          setOptionSingleValueState={setOptionSingleValue}
          optionValues={fruits}
        />
      </div>
      <div className="w-full md:w-40">
        <FieldImgUpload imgState={img || ""} setImgState={setImg} />
      </div>
    </div>
  );
};

export default InvoiceTrip;
