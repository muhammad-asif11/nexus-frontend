const MessageBubble = ({
  message,
  type,
}: {
  message: string;
  type: "sent" | "received";
}) => {
  return (
    <div
      className={`flex ${
        type === "sent" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] ${
          type === "sent"
            ? "bg-blue-600"
            : "bg-gray-700"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;