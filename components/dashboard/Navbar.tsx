"use client";
import { useEffect, useState, useRef } from "react";
import { Icon } from "../share/Icon";
import Notification from "../share/Notification";
import SearchBar from "../share/Search";
import { Revenue } from "../utills/const";
import ChatLayout from "../ChatUs/ChatLayout";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ reference wrapper
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <section className="px-6 mb-6 py-4 ">
      <h3 className="text-base font-medium">Total Revenue</h3>

      <article className="flex justify-between items-center">
        <div className="flex place-items-center gap-5">
          <h2 className="text-2xl font-bold">$ 45,365.00</h2>

          {Revenue.map((item, index) => (
            <p key={index} className={`flex items-center gap-2 ${item.color}`}>
              <Icon
                name={item.icon}
                className={item.rotate ? "rotate-180" : ""}
              />
              ${item.number}
            </p>
          ))}
        </div>

        <div className="flex place-items-center gap-4">
          <SearchBar
            title="Search"
            className="bg-white gap-4 flex-row-reverse"
          />

          {/* ✅ wrap BOTH button + popup */}
          <div ref={chatRef} className="flex items-center gap-6 relative">
            
            {/* Message Icon */}
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer"
            >
              <Notification icon="message" />
            </div>

            {/* Popup */}
            {open && (
              <div className="absolute top-12 right-0 z-50 transition-all duration-200 animate-fadeIn">
                <ChatLayout />
              </div>
            )}

            <Notification icon="notification" />

            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>
      </article>
    </section>
  );
}