import React from "react";
import "./ChatWindow.css";

const ChatWindow = ({ selectedChat }) => {
  if (!selectedChat) {
    return (
      <div className="chat-window empty">
        <div className="empty-icon">💬</div>
        <p>Select a chat to start messaging</p>
      </div>
    );
  }

  const getInitials = (name) => name.charAt(0).toUpperCase();

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="profile-circle">{getInitials(selectedChat.name)}</div>
        <div className="chat-info">
          <span>{selectedChat.name}</span>
          <small>last seen 5 mins ago</small>
        </div>
      </div>
      
      <div className="chat-messages">
        <div className="date-label">Today</div>
        <div className="message sent">
          OMG 😱 do you remember what you did last night at the work night out?
          <span className="like-icon">❤️</span>
          <span className="read-receipt">✔✔ 18:12</span>
        </div>
        <div className="message sent">No haha</div>
        <div className="message received">I don't remember anything 😅</div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Message" />
        <button>➤</button>
      </div>
    </div>
  );
};

export default ChatWindow;
