import NotificationItem from "./NotificationItem";

const NotificationList = ({ notifications }) => (
  <div className="space-y-3">
    {notifications.map((notif) => (
      <NotificationItem key={notif.id} notification={notif} />
    ))}
  </div>
);

export default NotificationList;