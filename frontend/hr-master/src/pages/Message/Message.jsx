import React, { useState } from "react";
import "./Message.css";
import Header from "../../components/common/Header/Header";
import Nav from "../../components/common/Nav/Nav";
import ChatList from "../../components/Message/ChatList";
import ChatWindow from "../../components/Message/ChatWindow";

const Message = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="message-container">
      <Header />
      <div className="message-content">
        <Nav />
        <ChatList setSelectedChat={setSelectedChat} />
        <ChatWindow selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default Message;
