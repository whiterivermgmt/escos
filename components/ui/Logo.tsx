"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="select-none"
    >
      <Link href="/" className="block">
        <Image
          src="/escos/logo.png"
          alt="Escos Logo"
          width={300}
          height={100}
          className="
            h-10        /* mobile */
            md:h-12     /* tablet */
            lg:h-14     /* desktop */
            w-auto
          "
          priority
        />
      </Link>
    </motion.div>
  );
};

export default Logo;
