import ChatItem from "./ChatItem";

function ChatList({ chats, activeChat, setActiveChat }) {
  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          isActive={activeChat?.id === chat.id}
          onClick={setActiveChat}
        />
      ))}
    </div>
  );
}

export default ChatList;