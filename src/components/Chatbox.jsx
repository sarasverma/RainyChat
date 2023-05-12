import React, { useContext } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { ChatContext } from "../context/ChatContext";

const ChatBox = () => {
  const { data } = useContext(ChatContext);
  console.log(data);

  return (
    <div className="chatbox">
      {data.chatId === "null" ? (
        <div className="rainyChatInfo">
          <i className="fa-solid fa-cloud-showers-water"></i>
          <p className="about">
            Rainy Chat - Where conversations pour like raindrops. Connect with
            friends and loved ones from anywhere in the world.
          </p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ChatBox;
