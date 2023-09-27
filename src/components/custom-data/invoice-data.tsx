import { randomUUID } from "crypto";

export interface InvoiceDataInterface {
  id: string;
  invoiceNo: number;
  trip: number;
  invoiceDate: string;
  invoiceAmount: number;
  balanceDue: number;
  paymentMethod: string;
  dueDate: string;
  status: string;
}

export const generateRandomInvoiceData = (
  length: number
): InvoiceDataInterface[] => {
  const data = [];
  const status = ["paid", "unpaid", "partial", "paid", "unpaid", "partial"];
  const getRanDomValue = (limit: number) => Math.floor(Math.random() * limit);
  for (let i = 0; i < length; i++) {
    data.push({
      id: getRanDomValue(7125656565656).toString(),
      invoiceNo: Date.now(),
      trip: getRanDomValue(3),
      invoiceDate: new Date().toDateString(),
      invoiceAmount: getRanDomValue(5),
      balanceDue: getRanDomValue(4),
      paymentMethod: ["BKASH", "NAGAD", "ROCKET", "CASH"][getRanDomValue(4)],
      dueDate: new Date(
        new Date().setMonth(new Date().getMonth() + 1)
      ).toDateString(),
      status: status[getRanDomValue(6)],
    });
  }
  return data;
};
