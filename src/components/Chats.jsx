import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1677512447102-237d00a3e902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
          alt="user"
        />
        <div className="userChatInfo">
          <span>July</span>
          <p>Hello there</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
