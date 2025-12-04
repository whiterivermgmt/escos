"use client";

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SiFacebook, SiGoogle, SiInstagram, SiYelp } from "react-icons/si";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { headerData } from "@/Constants/data";
import { IoIosPhonePortrait } from "react-icons/io";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Auto-close on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setOpenIndex(null); // Reset submenu whenever sidebar closes
  };

  const socialLinks = [
    { href: "https://www.facebook.com/shannonanddeb/", icon: <SiFacebook />, name: "Facebook" },
    { href: "https://www.instagram.com/shannonanddeb/", icon: <SiInstagram />, name: "Instagram" },
    { href: "/mobileapp", icon: <IoIosPhonePortrait />, name: "Mobile App" },
  ];

  if (!isMounted) return null;

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-full w-72 z-50 shadow-2xl flex flex-col justify-between rounded-r-3xl bg-[#383838]"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <motion.button
            onClick={handleClose}
            whileHover={{ rotate: 90, scale: 1.15 }}
            className="text-red-600 hover:text-red-800 p-3 rounded-full transition-all duration-300 shadow-sm bg-gray-100/80 cursor-pointer"
          >
            <ChevronDown className="w-7 h-7 rotate-45" />
          </motion.button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-3 px-4 mt-2 overflow-y-auto">
          {headerData.map((item, idx) => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isActive = pathName === item.href;

            return (
              <div key={item.title} className="w-full">
                {/* Main item */}
                <div
                  className={`flex justify-between items-center w-full px-5 py-4 text-xl font-bold rounded-[28px] cursor-pointer transition-colors duration-200
                    ${isActive ? "bg-[#f6efe5] text-[#c21a1a]" : "text-white"}
                    group hover:bg-[#f6efe5] hover:text-[#c21a1a"]`}
                  onClick={() => {
                    if (hasSubmenu) toggleSubmenu(idx);
                    else handleClose();
                  }}
                >
                  {hasSubmenu ? (
                    <span className={`transition-colors duration-200 ${isActive ? "text-[#c21a1a]" : "group-hover:text-[#c21a1a]"}`}>
                      {item.title}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={`w-full transition-colors duration-200 ${isActive ? "text-[#c21a1a]" : "group-hover:text-[#c21a1a]"}`}
                      onClick={handleClose}
                    >
                      {item.title}
                    </Link>
                  )}
                  {hasSubmenu && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200
                        ${openIndex === idx || isActive ? "rotate-180 text-[#c21a1a]" : "text-white"}`}
                    />
                  )}
                </div>

                {/* Submenu */}
                <AnimatePresence>
                  {hasSubmenu && openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col ml-2 mt-2 gap-2"
                    >
                      {item.submenu.map(sub => {
                        const isSubActive = pathName === sub.href;
                        return (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={handleClose}
                            className={`px-5 py-3 rounded-[28px] text-lg font-semibold transition-colors duration-200
                              ${isSubActive ? "bg-[#f6efe5] text-[#c21a1a]" : "text-white"}
                              hover:bg-[#f6efe5] hover:text-[#c21a1a"]`}
                          >
                            <span className={`${isSubActive ? "text-[#c21a1a]" : "hover:text-[#c21a1a]"} transition-colors duration-200`}>
                              {sub.title}
                            </span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 p-4">
          {socialLinks.map((item, idx) => (
            <div key={idx} className="relative group">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 shadow-md hover:bg-red-700 transition-colors duration-200"
              >
                {React.cloneElement(item.icon, { className: "w-6 h-6 text-white" })}
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SideMenu;
