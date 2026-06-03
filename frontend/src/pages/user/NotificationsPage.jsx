import NotificationHeader from "../../components/notifications/NotificationHeader";
import NotificationTabs from "../../components/notifications/NotificationTabs";
import NotificationList from "../../components/notifications/NotificationList";
import { initialNotifications } from "../../constants";
import { useParams } from "react-router-dom";
import { useState } from "react";

function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const { tab } = useParams(); // e.g., "unread" or "all-notifications"

  const markAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, unread: false }));
    setNotifications(updated);
  };
  let filteredNotifications = notifications;
  if (tab === "unread") {
    filteredNotifications = notifications.filter((n) => n.unread);
  }

  // Convert slug back to display name if needed
  return (
    <main className="mx-auto w-full max-w-4xl flex-grow px-4 py-8 sm:px-6 lg:px-8">
      <NotificationHeader markAllAsRead={markAllAsRead} />
      <NotificationTabs />

      <NotificationList
        notifications={filteredNotifications}
        emptyMessage={
          tab === "unread"
            ? "No unread notifications"
            : "No notifications found"
        }
      />
      <div className="mt-8 flex justify-center">
        <button className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
          Show more notifications
        </button>
      </div>
    </main>
  );
}

export default NotificationsPage;
