/* eslint-disable react/prop-types */
const StatusBtn = ({
  status,
}: {
  status?: "paid" | "unpaid" | "cancelled";
}) => {
  return (
    <span
      className={`rounded-3xl font-semibold px-4 capitalize py-1  block ${
        status === "paid"
          ? "bg-green-100 text-green-500"
          : status === "cancelled"
          ? "bg-violet-100 text-violet-500"
          : "bg-red-100 text-red-500"
      }`}
    >
      {status === "paid"
        ? "paid"
        : status === "cancelled"
        ? "cancelled"
        : "unpaid"}
    </span>
  );
};

export default StatusBtn;
