"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";
import { headerData } from "@/Constants/data";

const HeaderMenu: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathName = usePathname();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="hidden lg:flex items-center justify-center relative z-20 h-20 w-full px-4">
  <div className="flex items-center gap-12 max-w-7xl w-full flex-wrap justify-center">
    {headerData.map((item, index) => {
      const isActive = pathName === item.href;
      const hasSubmenu =
        Array.isArray(item.submenu) && item.submenu.length > 0;

      return (
        <div
          key={item.title}
          className="relative group flex items-center gap-1 min-w-0"
          onMouseEnter={() => hasSubmenu && setOpenIndex(index)}
          onMouseLeave={() =>
            hasSubmenu && setOpenIndex(prev => (prev === index ? null : prev))
          }
        >
          <Link
            href={item.href}
            className={`
              font-bold text-2xl transition-all duration-200 uppercase
              ${isActive ? "text-red-600" : "text-black"}
              group-hover:text-red-600
              flex items-center gap-1 min-w-0
            `}
            style={{ fontFamily: "'Bubblegum Sans', cursive" }}
          >
            {item.title}
            {hasSubmenu && (
              <span className="text-sm transform group-hover:rotate-180 transition-transform">
                ▼
              </span>
            )}
          </Link>

          {hasSubmenu && (
            <div
              className="absolute top-full left-0 z-30 bg-white rounded-lg shadow-lg w-48"
              style={{
                pointerEvents: openIndex === index ? "auto" : "none",
                opacity: openIndex === index ? 1 : 0,
                transform:
                  openIndex === index
                    ? "translateY(4px)"
                    : "translateY(-10px)",
                transition: "opacity 200ms ease, transform 200ms ease",
              }}
            >
              <DropdownMenu menuTitle={item.title} />
            </div>
          )}
        </div>
      );
    })}
  </div>
</nav>

  );
};

export default HeaderMenu;
