"use client";
import BtnPrimary from "@/components/buttons/BtnPrimary";
import { AiOutlinePlusCircle } from "react-icons/ai";
import InvoiceTrip from "@/components/invoice/InvoiceTrip";
import InvoiceProduct from "@/components/invoice/InvoiceProduct";
import InvoiceTable from "@/components/invoice/InvoiceTable";
const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="uppercase font-bold ">invoice/</h3>
          <p>Invoices</p>
        </div>
        <BtnPrimary className="flex items-center gap-1 ">
          <AiOutlinePlusCircle className="text-2xl" /> Add Invoice
        </BtnPrimary>
      </div>

      <InvoiceTable />
    </div>
  );
};

export default page;
