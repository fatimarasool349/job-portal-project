import { getNotificationIcon } from "../../../utils/notificationUtils";

function NotificationItems({ notification }) {
  const { title, message, type, createdAt, isRead } = notification;

  const Icon = getNotificationIcon(type);

  return (
    <div
      className={`flex items-start space-x-3 p-4 rounded-xl border transition hover:shadow-sm
      ${isRead ? "bg-white" : "bg-blue-50 border-blue-200"}`}
    >
      <div className="mt-1">
        <Icon className="text-gray-600" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{message}</p>
        <span className="text-xs text-gray-400">{createdAt}</span>
      </div>
    </div>
  );
}

export default NotificationItems;