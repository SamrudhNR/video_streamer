import React from "react";

const ChatMessage = ({name, message,profile}) => {
  return (
    <div className="flex items-center shadow-md p-2  ">
      
      <img
        className="h-8 rounded-full "
        src={profile}
        alt="user"
      />
      <span className="font-bold px-2 ">{name}</span>
      <span className="px-3">{message}</span>
    </div>
  );
};

export default ChatMessage;