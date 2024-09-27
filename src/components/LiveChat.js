import React, {  useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate } from "../utils/generateName";
import { generateName } from "../utils/generateMessage";
import { generateProfileImage } from "../utils/generateProfile";

const LiveChat = () => {
  const [liveMessage, setliveMessage] = useState("");
  const dispath = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("Api polling");
      dispath(
        addMessage({
          name: generate(),
          message: generateName(10),
          profile: generateProfileImage(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-[600px]">
      <div className="w-full  ml-2 p-2 border border-black">
       <h1 className="font-bold border-b-2 border-black p-2">Live Chat</h1>
       <div className="space-y-2 overflow-y-scroll p-2 flex flex-col-reverse h-[500px]">

        {/* LiveChat */}
        {ChatMessages.map((c, i) => (
          <ChatMessage
          key={i}
          name={c.name}
          message={c.message}
          profile={c.profile}
          />
        ))}
        </div>
        {/* <ChatMessage name="Akshay saini"
      message="this is namste react course" /> */}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispath(
            addMessage({
              name: "Rishabh",
              message: liveMessage,
              profile:
                "https://i.pinimg.com/736x/d3/08/fa/d308faa0375e1913e8bb93d3c46c1668.jpg",
            })
          );
          setliveMessage("")
        }}
      >
        <input
          className="px-2 w-96 border border-black rounded-md"
          type="text"
          placeholder="write Something here"
          value={liveMessage}
          onChange={(e) => {
            setliveMessage(e.target.value);
          }}
        ></input>
        <button className="px-2 mx-2 border bg-red-100">send</button>
      </form>
    </div>
  );
};

export default LiveChat;