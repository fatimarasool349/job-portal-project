import { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
import { sendMessage, getMessages } from "../../../constant";

function ChatInput({setMessages, currentUserId, chatUserId}) {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

 useEffect(() => {
  const loadMessages = async () => {
    const data = await getMessages(currentUserId, chatUserId);
    setMessages(data);
  };
  loadMessages();
}, [currentUserId, chatUserId]);

 const handleSend = async () => {
  if (!text.trim() && !file) return;

  const newMsg = await sendMessage({
    text,
    file,
    senderId: currentUserId, // e.g., 0
    receiverId: chatUserId,  // id of selected chat
  });

  setMessages((prev) => [...prev, newMsg]);

  setText("");
  setFile(null);
};

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-4 border-t bg-white dark:bg-slate-900">
      <div className="flex gap-2 items-center bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
        {/* FILE BUTTON */}
        <label className="cursor-pointer">
          <FiPaperclip className="text-xl text-gray-600" />
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        {/* TEXTAREA */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-transparent resize-none outline-none text-sm"
          placeholder="Type a message..."
        />

        {/* SEND BUTTON */}
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          <IoSend />
        </button>
      </div>

      {/* SHOW SELECTED FILE */}
      {file && (
        <p className="text-xs mt-2 text-gray-500">Selected: {file.name}</p>
      )}
    </div>
  );
}

export default ChatInput;
