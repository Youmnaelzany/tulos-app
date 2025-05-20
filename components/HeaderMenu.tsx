"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerData } from "@/constants";

const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <div className="hidden w-1/3 items-center gap-5 text-sm font-semibold capitalize md:inline-flex">
      {headerData.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className={`hover:text-darkColor hoverEffect group relative ${pathname === item.href && "text-darkColor"}`}
        >
          {item.title}
          <span
            className={`bg-darkColor hoverEffect absolute -bottom-0.5 left-1/2 h-0.5 w-0 group-hover:left-0 group-hover:w-1/2 ${pathname === item.href && "w-1/2"}`}
          />
          <span
            className={`bg-darkColor hoverEffect absolute right-1/2 -bottom-0.5 h-0.5 w-0 group-hover:right-0 group-hover:w-1/2 ${
              pathname === item.href && "w-1/2"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};
export default HeaderMenu;
