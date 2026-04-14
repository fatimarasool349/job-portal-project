import { useState, useEffect } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { chats, getMessages } from "../../../constant/data";
import ChatHeader from "./ChatHeader";

function ChatWindow({ activeChat, setActiveChat, role }) {
  const [messages, setMessages] = useState([]);

  const currentUserId = 0;
  useEffect(() => {
    const loadMessages = async () => {
      if (!activeChat) return;
      const data = await getMessages(currentUserId, activeChat.id);
      setMessages(data);
    };

    loadMessages();
  }, [activeChat]);

  return (
    <section className="hidden md:flex flex-1 flex-col bg-slate-50 dark:bg-slate-950/20">
      <ChatHeader chat={activeChat} role={role} />
      <ChatMessages messages={messages} />

      {role !== "admin" && (
        <ChatInput
          setMessages={setMessages}
          currentUserId={currentUserId}
          chatUserId={activeChat?.id}
        />
      )}
    </section>
  );
}

export default ChatWindow;
