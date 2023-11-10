import ChatDisplay from "./ChatDisplay";
import io from "socket.io-client";

import { useEffect, useState } from "react";
import ChatInput from "./ChatInput";

function Chat() {
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({});
  useEffect(() => {
    const socket = io("http://localhost:3000/");

    socket.on("connect", () => {
      console.log("Connected to server");
      setUser(socket.id);
      if (currentMessage != "") {
        socket.emit("send-message", currentMessage);
        setCurrentMessage("");
      }
    });

    socket.on("send-back", (currentMessage) => {
      setMessages([...messages, currentMessage]);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  return (
    <div className="chat w-96 h-auto bg-stone-900 p-5 rounded-lg">
      <div className="info flex flex-col gap-3 mb-4 text-xs">
        <p className="room w-full box-border">
          Room: <span className="p-1 bg-green-500 rounded-md">{user}</span>{" "}
        </p>
        <p className="user">
          User: <span className="p-1 bg-purple-500 rounded-md">{user}</span>
        </p>
      </div>

      <ChatDisplay messages={messages} />

      <ChatInput
        messages={messages}
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
        setMessages={setMessages}
      />
    </div>
  );
}

export default Chat;
