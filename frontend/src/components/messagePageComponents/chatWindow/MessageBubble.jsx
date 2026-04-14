function MessageBubble({ message }) {
  const isSender = message.sender === "me";
  const msgDate = new Date(message.date);
  const hours = msgDate.getHours();
  const minutes = msgDate.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs p-3 rounded-2xl text-sm
          ${
            isSender
              ? "bg-blue-600 text-white rounded-tr-none"
              : "bg-white dark:bg-slate-800 rounded-tl-none border"
          }`}
      >
        <p>{message.text}</p>
        <span className="text-[10px] opacity-70 block mt-1">
          {formattedTime}
        </span>
      </div>
    </div>
  );
}

export default MessageBubble;
