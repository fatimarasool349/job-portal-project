import NotificationItems from "./NotificationItems";

function NotificationList({ notifications }) {
  if (!notifications.length) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No notifications found
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {notifications.map((notification) => (
        <NotificationItems key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationList;