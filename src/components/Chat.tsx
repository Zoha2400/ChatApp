function Chat() {
  return (
    <div className="chat w-96 h-auto bg-stone-900 p-5 rounded-lg">
      <div className="info flex flex-col gap-1 mb-2 text-xs">
        <p className="room w-full box-border">Room: </p>
        <p className="user">User: </p>
      </div>
      <div className="chat-disp w-full h-96 rounded-md bg-stone-950"></div>
      <div className="flex items-end justify-center mt-2 gap-2 flex-col">
        <textarea
          className=" resize-none h-16 outline-none border rounded-xl p-1 w-full bg-indigo-900 text-xs"
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
