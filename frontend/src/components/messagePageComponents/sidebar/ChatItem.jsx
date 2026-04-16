function ChatItem({ chat, isActive, onClick }) {
  return (
    <div
      onClick={() => onClick(chat)}
      className={`flex items-center gap-4 px-4 py-4 cursor-pointer border-l-4 transition
        ${isActive
          ? "bg-blue-50 dark:bg-blue-900/20 border-blue-600"
          : "hover:bg-slate-50 dark:hover:bg-slate-800 border-transparent"
        }`}
    >
      <div className="relative">
        <img
          src={chat.avatar}
          className="size-12 rounded-full object-cover"
        />
        {chat.online && (
          <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></span>
        )}
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <p className="font-bold text-sm">{chat.name}</p>
          <p className="text-xs text-slate-400">{chat.time}</p>
        </div>

        <p className="text-xs text-blue-600">{chat.company}</p>

        <p className="text-sm text-slate-500 truncate">
          {chat.message}
        </p>
      </div>
    </div>
  );
}

export default ChatItem;