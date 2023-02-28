import React from "react";

const MessageInput = () => {
  return (
    <div className="messageInput">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <i className="fa-solid fa-paperclip"></i>
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <i className="fa-regular fa-image"></i>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default MessageInput;
