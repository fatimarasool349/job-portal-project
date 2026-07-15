import MessageBubble from "./MessageBubble";
const formatDateLabel = (dateStr) => {
  const today = new Date();
  const msgDate = new Date(dateStr);
  const isToday = today.toDateString() === msgDate.toDateString();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const isYesterday = yesterday.toDateString() === msgDate.toDateString();
  if (isToday) {return "Today";}
  if (isYesterday) {return "Yesterday";}
  return msgDate.toLocaleDateString();
};

function ChatMessages({ messages }) {
  if (!messages || messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        No messages yet
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((msg, index) => {
        const msgDateObj = new Date(msg.date);
        const msgDateStr = msgDateObj.toDateString();
        const prevDateStr =
          index > 0 ? new Date(messages[index - 1].date).toDateString() : null;
        const showDate = msgDateStr !== prevDateStr;

        return (
          <div key={msg.id}>
            {showDate && (
              <div className="flex justify-center my-4">
                <span className="text-[11px] bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">
                  {formatDateLabel(msg.date)}
                </span>
              </div>
            )}

            <MessageBubble message={msg} />
          </div>
        );
      })}
    </div>
  );
}
export default ChatMessages;
