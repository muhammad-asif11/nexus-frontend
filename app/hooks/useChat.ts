"use client";

import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";

type Message = {
  from: string;
  to: string;
  message: string;
};

export const useChat = (userId: string, targetUserId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.connect();

    socket.emit("register-user", userId);

    socket.on("receive-message", (data: Message) => {
      console.log("Received:", data);

      setMessages((prev) => [...prev, data]); // ✅ update UI
    });

    return () => {
      socket.off("receive-message");
    };
  }, [userId]);

  const sendMessage = (message: string) => {
    const msg = {
      from: userId,
      to: targetUserId,
      message,
    };

    console.log("Sending:", msg);

    // ✅ send to backend
    socket.emit("send-message", msg);

    // ✅ update UI instantly (VERY IMPORTANT)
    setMessages((prev) => [...prev, msg]);
  };

  return { messages, sendMessage };
};