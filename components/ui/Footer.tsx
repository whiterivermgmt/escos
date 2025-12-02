"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { headerData } from "@/Constants/data";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { IoIosPhonePortrait } from "react-icons/io";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const socialLinks = [
    { href: "https://www.facebook.com/shannonanddeb", icon: <SiFacebook />, name: "Facebook" },
    { href: "https://www.instagram.com/shannonanddeb/", icon: <SiInstagram />, name: "Instagram" },
    { href: "/mobileapp", icon: <IoIosPhonePortrait />, name: "Mobile App" },
  ];

  return (
    <footer className="text-white mt-auto bg-red-800 relative overflow-hidden">
      {/* Optional subtle snowflakes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-snowflake opacity-40" style={{ top: "20%", left: "15%" }} />
        <div className="absolute w-2 h-2 bg-white rounded-full animate-snowflake opacity-50" style={{ top: "50%", left: "60%" }} />
      </div>

      <Container>
        <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-center">
          
          {/* Logo + Description + Social */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="cursor-pointer">
                <Image
                  src="/logo/radio.png"
                  alt="90.1 WBED Logo"
                  width={160}
                  height={80}
                  className="object-contain mx-auto"
                />
              </motion.div>
            </Link>
            <p className="text-base">
              90.1 WBED – Playing the best hits in Lawrence County.
            </p>
            <div className="flex gap-3 mt-2 justify-center">
              {socialLinks.map((item, idx) => (
                <div key={idx} className="relative group">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-red-800 hover:bg-yellow-300 hover:text-red-800 transition"
                  >
                    {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b border-white inline-block pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base flex flex-col items-center">
              {headerData.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={`transition-all font-medium hover:text-yellow-300 ${
                      pathname === link.href ? "text-yellow-300 font-semibold" : "text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Our App */}
          <div>
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b border-white inline-block pb-2">
              Download Our Free App
            </h3>
            <div className="flex flex-col gap-4 items-center">
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
                <Link
                  href="https://apps.apple.com/us/app/fun-90-1-wbed-fm-listen-live/id1633500701"
                  target="_blank"
                >
                  <Image src="/logo/apple.png" alt="Apple App Store" width={150} height={50} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.next.fun90wbed"
                  target="_blank"
                >
                  <Image src="/logo/google.png" alt="Google Play Store" width={150} height={50} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b border-white inline-block pb-2">
              Contact
            </h3>
            <div className="flex flex-col gap-2 items-center">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white" /> Bedford
              </h4>
              <p className="text-center">1016-B 15th Street, Bedford, IN, United States, 47421</p>
              <a href="tel:+18122791957" className="flex items-center gap-2 hover:text-yellow-300 transition">
                <Phone className="w-4 h-4 text-white" /> +1 812-279-1957
              </a>
              <a href="mailto:fun@wbedfm.com" className="flex items-center gap-2 hover:text-yellow-300 transition">
                <Mail className="w-4 h-4 text-white" /> fun@wbedfm.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white mt-8 pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm">
          <p className="mb-2 md:mb-0 text-center md:text-left">© {new Date().getFullYear()} Fun! 90.1 WBED. All Rights Reserved</p>
          <p className="text-center md:text-right">
            Designed by{" "}
            <Link href="https://whiteriver.media" target="_blank" className="font-medium hover:text-yellow-300">
              White River Media
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
