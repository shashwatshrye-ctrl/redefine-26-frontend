"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RegisterButton() {
  return (
    <div className="absolute top-6 right-6 z-50 overflow-visible">
      {/* Animated Button */}
      <motion.button
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="cursor-pointer select-none"
      >
        <div className="relative w-[150px] sm:w-[180px] md:w-[210px] lg:w-[230px] xl:w-[250px]">
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
      <div className="absolute -bottom-8 left-0 right-0 pointer-events-none flex justify-center">
        <Image
          src="/redefine-2026/arrow.svg"
          alt="Arrow"
          width={120}
          height={80}
          priority
          className="object-contain opacity-80"
        />
      </div>
    </div>
  );
}
