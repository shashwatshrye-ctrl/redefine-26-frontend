"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeadProps {
  activeTab?: "timeline" | "tracks" | "team-up" | "faq" | "teams";
}

export default function Head({ activeTab }: HeadProps) {
  return (
    <header className="relative inset-x-0 left-0 right-0 top-0 w-full max-w-none flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-6 md:py-8 lg:py-9 z-40 bg-transparent m-0 border-b border-transparent">
      {/* Left: Logo */}
      <Link href="/" className="relative w-[145px] h-[62px] md:w-[185px] md:h-[72px] lg:w-[205px] lg:h-[80px] shrink-0 transition-transform hover:scale-105">
        <Image
          src="/redefine-2026/logo.svg"
          alt="Redefine Logo"
          fill
          priority
          unoptimized
          className="object-contain"
        />
      </Link>

      {/* Center: SVG Menu Links (Visible on desktop) */}
      <nav className="hidden md:flex items-center gap-14 lg:gap-20">
        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          <Link href="/#timeline" className="hover:opacity-75 transition-opacity duration-200">
            <div className="relative w-[125px] h-[26px] md:w-[140px] md:h-[29px]">
              <Image src="/tracks/TIMELINE.svg" alt="Timeline" fill className="object-contain" />
            </div>
          </Link>
          {activeTab === "timeline" && (
            <div className="absolute -bottom-6 w-[125px] h-[26px] md:w-[140px] md:h-[29px] pointer-events-none">
              <Image src="/tracks/Vector 105.svg" alt="" fill className="object-contain" />
            </div>
          )}
        </div>

        {/* Tracks */}
        <div className="relative flex flex-col items-center">
          <Link href="/tracks" className="hover:opacity-75 transition-opacity duration-200">
            <div className="relative w-[108px] h-[26px] md:w-[120px] md:h-[29px]">
              <Image src="/tracks/TRACKS.svg" alt="Tracks" fill className="object-contain" />
            </div>
          </Link>
          {activeTab === "tracks" && (
            <div className="absolute -bottom-6 w-[125px] h-[26px] md:w-[140px] md:h-[29px] pointer-events-none">
              <Image src="/tracks/Vector 105.svg" alt="" fill className="object-contain" />
            </div>
          )}
        </div>

        {/* Team Up */}
        <div className="relative flex flex-col items-center">
          <Link href="/teams" className="hover:opacity-75 transition-opacity duration-200">
            <div className="relative w-[108px] h-[26px] md:w-[120px] md:h-[29px]">
              <Image src="/tracks/TEAM UP.svg" alt="Team Up" fill className="object-contain" />
            </div>
          </Link>
          {(activeTab === "team-up" || activeTab === "teams") && (
            <div className="absolute -bottom-6 w-[125px] h-[26px] md:w-[140px] md:h-[29px] pointer-events-none">
              <Image src="/tracks/Vector 105.svg" alt="" fill className="object-contain" />
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="relative flex flex-col items-center">
          <Link href="/#faq" className="hover:opacity-75 transition-opacity duration-200">
            <div className="relative w-[62px] h-[26px] md:w-[70px] md:h-[29px]">
              <Image src="/tracks/FAQ.svg" alt="FAQ" fill className="object-contain" />
            </div>
          </Link>
          {activeTab === "faq" && (
            <div className="absolute -bottom-6 w-[125px] h-[26px] md:w-[140px] md:h-[29px] pointer-events-none">
              <Image src="/tracks/Vector 105.svg" alt="" fill className="object-contain" />
            </div>
          )}
        </div>
      </nav>

      {/* Right: Register Button */}
      <div>
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer select-none"
        >
          <div className="relative w-[185px] sm:w-[215px] md:w-[255px] aspect-[2.8/1]">
            <Image
              src="/redefine-2026/register.svg"
              alt="Register"
              fill
              priority
              className="object-contain pointer-events-none select-none"
            />
          </div>
        </motion.button>
      </div>
    </header>
  );
}
