import Link from "next/link";
import React from "react";

const Logo = ({ text = "Exclusive" }) => {
  return (
    <Link href="/dashboard">
      <h2 className="text-xl lg:text-2xl font-bold cursor-pointer hover:opacity-80 transition">{text}</h2>
    </Link>
  );
};

export default Logo;
