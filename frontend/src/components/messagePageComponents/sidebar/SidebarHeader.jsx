import { MdEditSquare } from "react-icons/md";

function SidebarHeader() {
  return (
    <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
      <h1 className="text-xl font-bold">Messages</h1>
      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
        <MdEditSquare className="text-blue-700"/>
      </button>
    </div>
  );
}

export default SidebarHeader;