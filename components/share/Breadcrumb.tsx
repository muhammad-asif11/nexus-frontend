"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-500 mb-6">
      <Link href="/" className="hover:text-black">
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");

        return (
          <span key={index}>
            {" "}
            /{" "}
            {index === pathSegments.length - 1 ? (
              <span className="text-gray-700 capitalize font-semibold">
                {segment.replace(/-/g, " ")}
              </span>
            ) : (
              <Link href={href} className="hover:text-black capitalize">
                {segment.replace(/-/g, " ")}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;