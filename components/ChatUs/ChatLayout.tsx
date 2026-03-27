"use client";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import { useChat } from "@/app/hooks/useChat";
import Link from "next/link";

const ChatLayout = () => {
  const userId = "user1";
  const targetUserId = "user2";

  const { messages, sendMessage } = useChat(userId, targetUserId);

  return (
    <div className="w-full max-w-md mx-auto bg-[#18191A] text-white flex flex-col">
      <ChatHeader name="Khurram Shahzad" />

      <div className="flex flex-col justify-between w-[320px] h-60 bg-[#18191A] text-white">
        {messages.length === 0 ? (
          <p className="p-2 text-sm">
            Messages and calls are secured with end-to-end encryption. Only
            people in this chat can read, listen to, or share them.
            <Link href="/" className="text-blue-500">
              Learn more
            </Link>
          </p>
        ) : (
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <MessageBubble
                key={i}
                message={msg.message}
                type={msg.from === userId ? "sent" : "received"}
              />
            ))}
          </div>
        )}

        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
};

export default ChatLayout;
