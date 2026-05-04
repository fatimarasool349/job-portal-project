import { useState } from "react";
import Sidebar from "../../components/messagePageComponents/sidebar/Sidebar";
import ChatWindow from "../../components/messagePageComponents/chatWindow/ChatWindow";
import { chats } from "../../constants";

function MessagePage() {
    const role = localStorage.getItem("role") || "jobSeeker";

  const [activeChat, setActiveChat] = useState(chats[0]);

  return (
    <main className="flex flex-1 overflow-hidden bg-white dark:bg-slate-900">
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        role={role}
      />
      <ChatWindow activeChat={activeChat} setActiveChat={setActiveChat} role={role} />
    </main>
  );
}

export default MessagePage;