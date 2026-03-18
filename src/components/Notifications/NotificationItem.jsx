function NotificationItem({ notification,emptyMessage}) {

  const {
    type,
    title,
    time,
    jobTitle,
    company,
    message,
    avatar,
    unread,
    icon,
    actions,
    bgColor,
  } = notification;
      const IconComponent = icon; // get the component reference


  return (
    <div
      className={`group relative flex items-start gap-4 rounded-xl border border-slate-200 p-4 transition-all hover:bg-blue-600/10 dark:border-slate-800 ${
        unread
          ? bgColor
          : "bg-white dark:bg-slate-900/50 dark:hover:bg-slate-900"
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
        {IconComponent && <IconComponent className="text-blue-600 h-6 w-6" />}{" "}
        {avatar && (
          <img
            className="h-full w-full rounded-full object-cover"
            src={avatar}
            alt="avatar"
          />
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <span className="text-xs text-slate-500">{time}</span>
        </div>
        {message ? (
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {message}
          </p>
        ) : (
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {type !== "message" && (
              <>
                Your {type} for{" "}
                <span className="font-medium text-slate-900 dark:text-white">
                  {jobTitle}
                </span>{" "}
                at{" "}
                <span className="font-medium text-slate-900 dark:text-white">
                  {company}
                </span>
                .
              </>
            )}
          </p>
        )}
        {actions && (
          <div className="mt-3 flex gap-2">
            {actions.map((action, idx) => (
              <button
                key={idx}
                className={`rounded-md px-3 py-1.5 text-xs font-bold ${
                  idx === 0
                    ? "bg-blue-600 text-white hover:bg-blue-600/90"
                    : "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
                }`}
              >
                {action}
              </button>
            ))}
          </div>
        )}
      </div>

      {unread && type !== "interview" && (
        <div className="flex h-5 items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
        </div>
      )}
    </div>
  );
}

export default NotificationItem;
