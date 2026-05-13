const statusStyles = {
  pending: "bg-gray-200 text-gray-700",
  accepted: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700 opacity-80",
};

export default function ApplicationStatusBadge({
  status,
}) {
  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-medium ${
        statusStyles[status] || "bg-gray-100"
      }`}
    >
      {status}
    </span>
  );
}