import Message from "./Message";

function ChatDisplay() {
  return (
    <div className="chat-disp w-full h-96 rounded-md bg-stone-950 overflow-hidden relative">
      <p className="absolute w-full h-full flex justify-center items-center text-3xl font-extrabold opacity-25">
        Chat
      </p>

      <div className="messages w-full h-full absolute overflow-y-auto box-border p-1 gap-1">
        <Message
          position={true}
          value={{
            text: "hello world",
            date: new Date().getFullYear().toString(),
          }}
        />
        <Message
          position={false}
          value={{
            text: "hello world",
            date: new Date().getFullYear().toString(),
          }}
        />
      </div>
    </div>
  );
}

export default ChatDisplay;
