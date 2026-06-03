const statusStyles = {
  applied: "bg-gray-200 text-gray-700",
  "under review": "bg-yellow-100 text-yellow-700",
  "interview scheduled": "bg-indigo-100 text-indigo-700",
  "interview completed": "bg-purple-100 text-purple-700",
  selected: "bg-emerald-100 text-emerald-700",

  hired: "bg-green-100 text-green-700",

  rejected: "bg-red-100 text-red-700 opacity-80",
};

export default function ApplicationStatusBadge({ status }) {
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
