const getStatusStyle = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Closed":
      return "bg-red-100 text-red-700";
    case "Draft":
      return "bg-gray-200 text-gray-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};