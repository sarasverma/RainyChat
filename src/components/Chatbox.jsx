import React, { useContext } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { ChatContext } from "../context/ChatContext";

const ChatBox = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chatbox">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
