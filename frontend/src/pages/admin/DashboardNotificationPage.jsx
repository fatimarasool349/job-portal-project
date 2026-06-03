import { useState } from "react";
import { dummyNotifications } from "../../constants";

import NotificationHeader from "../../components/adminComponents/notificationComponents/NotificationHeader";
import NotificationFilters from "../../components/adminComponents/notificationComponents/NotificationFilters";
import NotificationList from "../../components/adminComponents/notificationComponents/NotificationList";

function DashboardNotificationPage() {
  const [notifications, setNotifications] = useState(dummyNotifications);
  const [filter, setFilter] = useState("all");

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, isRead: true }))
    );
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.isRead;
    if (filter === "read") return n.isRead;
    return true;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <NotificationHeader onMarkAllRead={markAllRead} />

      <NotificationFilters filter={filter} setFilter={setFilter} />

      <NotificationList notifications={filteredNotifications} />
    </div>
  );
}

export default DashboardNotificationPage;