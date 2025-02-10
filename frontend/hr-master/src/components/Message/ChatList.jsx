import React from "react";
import "./ChatList.css";

const chats = [
  { id: 1, name: "David Moore", time: "18:16" },
  { id: 2, name: "Jessica Drew", time: "18:30" },
  { id: 3, name: "Greg James", time: "18:02" },
];

const ChatList = ({ setSelectedChat }) => {
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div key={chat.id} className="chat-item" onClick={() => setSelectedChat(chat)}>
          <div className="chat-info">
            <span className="chat-name">{chat.name}</span> {/* 🔹 이름만 표시 */}
          </div>
          <span className="chat-time">{chat.time}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
