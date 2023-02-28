import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const ChatBox = () => {
  return (
    <div className="chatbox">
      <div className="chatInfo">
        <span>Raju</span>
        <div className="chatIcons">
          <i className="fa-solid fa-video"></i>
          <i className="fa-solid fa-user-plus"></i>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <Messages />
      <MessageInput />
    </div>
  );
};

export default ChatBox;
