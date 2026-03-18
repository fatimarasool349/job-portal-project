import SidebarHeader from "./SidebarHeader";
import FilterTabs from "./FilterTabs";
import ChatList from "./ChatList";

function Sidebar({ chats, activeChat, setActiveChat }) {
  return (
    <aside className="w-full md:w-80 lg:w-96 flex flex-col border-r border-slate-200 dark:border-slate-800">
      <SidebarHeader />
      <FilterTabs />
      <ChatList
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
    </aside>
  );
}

export default Sidebar;