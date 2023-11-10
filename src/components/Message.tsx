import messageProps from "../MessageProps";
function Message(props: messageProps) {
  const dateStyle = {
    fontSize: "10px",
  };

  return (
    <div
      className={`w-full h-fit gap-1 relative flex flex-col ${
        props.position ? "items-start" : "items-end"
      }`}
    >
      <div className="w-10/12 bg-stone-800 rounded-lg p-2 text-xs relative">
        <p className="text">{props.value.text}</p>
      </div>
      <p className="mt-1 mr-1 ml-1 italic text-gray-500" style={dateStyle}>
        {props.value.date.toString()}
      </p>
    </div>
  );
}

export default Message;
