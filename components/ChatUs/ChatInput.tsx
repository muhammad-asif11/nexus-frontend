"use client";
import { useState } from "react";
import { Smile, ThumbsUp, Image, Mic } from "lucide-react";
import Button from "../share/Button";

const ChatInput = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [text, setText] = useState("");
  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };
  const isTyping = text.trim().length > 0;
  return (
    <div className="flex items-center gap-2 p-3 border-t border-gray-700">
      <Mic className="text-blue-400 " />
      <Image className="text-blue-400" />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 bg-gray-700 px-3 py-1 w-full rounded-full outline-none"
        placeholder="Type message..."
      />
      <Button
          onClick={handleSend}
          title="send"
          style="bg-blue-600 px-3 rounded-full"
        />
      {/* {isTyping ? (
        <Button
          onClick={handleSend}
          title="send"
          style="bg-blue-600 px-3 rounded-full"
        />
      ) : (
        <div className="flex gap-2">
          <Smile className="text-blue-400" />
          <ThumbsUp className="text-blue-400" />
        </div>
      )} */}
    </div>
  );
};

export default ChatInput;
