"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RegisterButton() {
  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Animated Button */}
      <motion.button
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{ duration: 0.2 }}
        className="cursor-pointer select-none transition-transform duration-200 hover:-translate-y-0.5"
      >
        <div className="relative w-[180px] md:w-[210px] lg:w-[230px] xl:w-[250px]">
          <Image
            src="/redefine-2026/register.svg"
            alt="Register"
            width={220}
            height={80}
            priority
            className="w-full h-auto pointer-events-none select-none"
          />
        </div>
      </motion.button>

      {/* Arrow (doesn't animate) */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/redefine-2026/arrow.svg"
          alt="Arrow"
          fill
          priority
          className="
            object-contain
            scale-[1.6]
            -translate-x-[52%]
            translate-y-[6rem]
          "
        />
      </div>
    </div>
  );
}