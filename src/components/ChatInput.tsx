import { useState } from "react";

function ChatInput({
  messages,
  setMessages,
  currentMessage,
  setCurrentMessage,
}) {
  const [text, setText] = useState("");

  function addMessage(el) {
    if (text.length != 0) {
      setMessages([
        ...messages,
        {
          position: false,
          value: {
            text: text,
            date: new Date().getSeconds(),
          },
        },
      ]);
      setCurrentMessage({
        position: true,
        value: {
          text: text,
          date: new Date().getSeconds(),
        },
      });
    }
    setText("");
  }

  return (
    <div className="flex items-end justify-center mt-2 gap-2 flex-col">
      <textarea
        className=" resize-none h-16 outline-none border rounded-xl p-2 w-full bg-stone-950 text-xs"
        name="message"
        placeholder="Type a message"
        id="msg"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            addMessage();
          }
        }}
      ></textarea>
      <button
        className="send p-2 text-xs bg-orange-600 rounded-lg animate-pulse"
        onClick={() => addMessage()}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
