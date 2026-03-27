"use client";
import Breadcrumb from "@/components/share/Breadcrumb";
import Button from "@/components/share/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Breadcrumb */}
      <Breadcrumb />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-4">
          404 Not Found
        </h1>

        <p className="text-gray-600 mb-8">
          Your visited page not found. You may go home page.
        </p>

        <Link href="/">
          <Button
            title="Back to home page"
            style="bg-Narangi hover:bg-red-600 text-white px-6 py-3 rounded transition"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
