function NotificationHeader({ markAllAsRead }) {
  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Notifications
        </h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Stay updated with your job applications and matches.
        </p>
      </div>
      <button onClick={markAllAsRead} className="inline-flex items-center justify-center rounded-lg bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-600/20 transition-colors">
        Mark all as read
      </button>
    </div>
  );
}

export default NotificationHeader;
