"use client";
import Link from "next/link";
import { menuItems } from "../utills/const";
import Button from "./Button";

const ProfileMenu = () => {
  return (
    <div className="absolute LinearGradient top-6 right-0 z-100 mt-6 w-64 text-white p-4 space-y-4 pIcon">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.link} className="block">
          <Button
            title={item.title}
            style="flex items-center gap-3 hover:text-gray-200 w-full text-left"
            icon={item.icon}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProfileMenu;