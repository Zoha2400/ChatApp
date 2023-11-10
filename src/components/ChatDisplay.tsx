import Message from "./Message";

function ChatDisplay({ messages }) {
  return (
    <div className="chat-disp w-full h-96 rounded-md bg-stone-950 overflow-hidden relative">
      <p className="absolute w-full h-full flex justify-center items-center text-3xl font-extrabold opacity-25">
        Chat
      </p>

      <div className="messages w-full h-full absolute overflow-y-auto box-border p-1 gap-1">
        {messages.map((m) => {
          return (
            <Message
              position={m.position}
              value={{
                text: m.value.text,
                date: m.value.date,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChatDisplay;
