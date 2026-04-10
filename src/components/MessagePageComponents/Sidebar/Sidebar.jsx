import SidebarHeader from "./SidebarHeader";
import FilterTabs from "./FilterTabs";
import ChatList from "./ChatList";

function Sidebar({ chats, activeChat, setActiveChat , role}) {
  return (
    <aside className="w-full md:w-80 lg:w-96 flex flex-col border-r border-slate-200 dark:border-slate-800">
      <SidebarHeader role={role} />
      <FilterTabs  role = {role}/>
      <ChatList
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        role={role}
      />
    </aside>
  );
}

export default Sidebar;