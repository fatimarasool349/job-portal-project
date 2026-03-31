import { useState } from "react";
import Sidebar from "../../components/MessagePageComponents/Sidebar/Sidebar";
import ChatWindow from "../../components/MessagePageComponents/ChatWindow/ChatWindow";
import { chats } from "../../constant/data";

function MessagePage() {
  const [activeChat, setActiveChat] = useState(chats[0]);

  return (
    <main className="flex flex-1 overflow-hidden bg-white dark:bg-slate-900">
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      <ChatWindow activeChat={activeChat} setActiveChat={setActiveChat} />
    </main>
  );
}

export default MessagePage;