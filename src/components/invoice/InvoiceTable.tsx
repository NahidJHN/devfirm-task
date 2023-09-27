import React from "react";
import ActionBtn from "@/components/buttons/ActionButton";
import StatusBtn from "@/components/buttons/StatusBtn";
import {
  InvoiceDataInterface,
  generateRandomInvoiceData,
} from "../custom-data/invoice-data";

const InvoiceTable = (props: InvoiceDataInterface[]) => {
  const data = generateRandomInvoiceData(100);
  return (
    <div className="bg-white mt-5 py-5 rounded-lg w-full overflow-x-auto">
      <table className="w-full text-center capitalize space-y-5">
        <thead>
          <tr className="border-y-[.1px] border-gray-200">
            <th className="px-2 py-3">invoice no</th>
            <th className="px-2 py-3">trip</th>
            <th className="px-2 py-3">inv. date</th>
            <th className="px-2 py-3">inv. amount</th>
            <th className="px-2 py-3">bal. due</th>
            <th className="px-2 py-3">payment method</th>
            <th className="px-2 py-3">due date</th>
            <th className="px-2 py-3">status</th>
            <th className="px-2 py-3">action</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td className="px-1 py-2">{item.invoiceNo}</td>
                <td className="px-1 py-2">{item.trip}</td>
                <td className="px-1 py-2">{item.invoiceDate}</td>
                <td className="px-1 py-2">{item.balanceDue}</td>
                <td className="px-1 py-2">{item.paymentMethod}</td>
                <td className="px-1 py-2">{item.dueDate}</td>
                <td className="px-1 py-2">{item.status}</td>
                <td className="px-1 py-2">
                  <StatusBtn status="paid" />
                </td>
                <td className="px-1 flex gap-1 justify-center py-2">
                  <ActionBtn variant="edit" />
                  <ActionBtn variant="delete" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default InvoiceTable;
