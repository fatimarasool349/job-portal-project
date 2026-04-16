function NotificationFilters({ filter, setFilter }) {
  const tabs = ["all", "unread", "read"];

  return (
    <div className="flex space-x-3 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-4 py-2 rounded-lg text-sm capitalize ${
            filter === tab
              ? "bg-blue-600 text-white"
              : "bg-white border text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default NotificationFilters;