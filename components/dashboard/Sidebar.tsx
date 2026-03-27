"use client";

import Link from "next/link";
import { Icon } from "../share/Icon";
import { menu } from "../utills/const";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white shadow-lg p-6 hidden md:block rounded-2xl">
      <nav className="space-y-6">
        <Icon name="powerOff" className="text-5xl w-full text-center" />

        {menu.map((item) => {
          const isActive = pathname === item.link;

          return (
            <Link
              key={item.name}
              href={item.link}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition
              
              ${
                isActive
                  ? "bg-[#F8FAFF] shadow-md text-[#2A4178] font-semibold"
                  : "text-[#2A4178] hover:text-[#2A4178] opacity-50 hover:opacity-100 hover:bg-gray-50"
              }`}
            >
              <Icon name={item.icon} className="text-2xl" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}