import default_profile from "./../../../assets/Images/default_profile.jpg" 
function ChatHeader({ chat }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-slate-900">
      <div className="flex items-center gap-4">
        <img
          src={chat.avatar|| default_profile}
          className="size-10 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold">{chat.name}</h3>
          <p className="text-xs text-slate-500">
            {chat.company} • {chat.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* <div className="flex gap-2">
        <button className="p-2 hover:bg-slate-100 rounded-lg">
          <span className="material-symbols-outlined">call</span>
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-lg">
          <span className="material-symbols-outlined">videocam</span>
        </button>
      </div> */}
    </div>
  );
}

export default ChatHeader;