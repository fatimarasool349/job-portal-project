function NotificationHeader({ onMarkAllRead }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">Notifications</h1>

      <button
        onClick={onMarkAllRead}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Mark all as read
      </button>
    </div>
  );
}

export default NotificationHeader;