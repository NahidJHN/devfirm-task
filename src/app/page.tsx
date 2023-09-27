"use client";
import BtnPrimary from "@/components/buttons/BtnPrimary";
import { AiOutlinePlusCircle } from "react-icons/ai";
import InvoiceTable from "@/components/invoice/InvoiceTable";
import InvoicePrintPage from "@/components/invoice/InvoicePrintPage";

export default function Home() {
  return (
    <>
      <InvoicePrintPage />
    </>
  );
}
