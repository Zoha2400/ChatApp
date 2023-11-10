import ChatDisplay from "./ChatDisplay";
import io from "socket.io-client";

// const socket = io.connect("http://localhost:3000/");

import { useEffect } from "react";

function Chat() {
  useEffect(() => {
    const socket = io("http://localhost:3000/");

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="chat w-96 h-auto bg-stone-900 p-5 rounded-lg">
      <div className="info flex flex-col gap-3 mb-4 text-xs">
        <p className="room w-full box-border">
          Room:{" "}
          <span className="p-1 bg-green-500 rounded-md">x656sadjkWijsd</span>{" "}
        </p>
        <p className="user">
          User:{" "}
          <span className="p-1 bg-purple-500 rounded-md">x656sadjkWijsd</span>
        </p>
      </div>

      <ChatDisplay />

      <div className="flex items-end justify-center mt-2 gap-2 flex-col">
        <textarea
          className=" resize-none h-16 outline-none border rounded-xl p-2 w-full bg-stone-950 text-xs"
          name="message"
          placeholder="Type a message"
          id="msg"
        ></textarea>
        <button className="send p-2 text-xs bg-orange-600 rounded-lg animate-pulse">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
