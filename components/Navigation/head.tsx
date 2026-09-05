"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeadProps {
  activeTab?: "timeline" | "tracks" | "team-up" | "faq" | "teams";
}

export default function Head({ activeTab }: HeadProps) {
  return (
    <header className="relative w-full flex items-center justify-between px-8 py-4 md:px-12 md:py-5 lg:px-16 lg:py-6 z-40 bg-transparent">
      {/* Left: Logo */}
      <Link href="/" className="relative w-[106px] h-[45px] md:w-[136px] md:h-[53px] transition-transform hover:scale-105">
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
      <nav className="hidden md:flex items-center gap-10 lg:gap-14">
        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          <Link href="/#timeline" className="hover:opacity-75 transition-opacity duration-200">
            <div className="relative w-[106px] h-[22px]">
              <Image src="/tracks/TIMELINE.svg" alt="Timeline" fill className="object-contain" />
            </div>
          </Link>
          {activeTab === "timeline" && (
            <div className="absolute -bottom-5 w-[106px] h-[22px] pointer-events-none">
              <Image src="/tracks/Vector 105.svg" alt="" fill className="object-contain" />
            </div>
          )}
        </div>

        {/* Tracks */}
        <div className="relative flex flex-col items-center">
          <Link href="/tracks" className="hover:opacity-75 transition-opacity duration-200">
            <div className="relative w-[91px] h-[22px]">
              <Image src="/tracks/TRACKS.svg" alt="Tracks" fill className="object-contain" />
            </div>
          </Link>
          {activeTab === "tracks" && (
            <div className="absolute -bottom-5 w-[106px] h-[22px] pointer-events-none">
              <Image src="/tracks/Vector 105.svg" alt="" fill className="object-contain" />
            </div>
          )}
        </div>

        {/* Team Up */}
        <div className="relative flex flex-col items-center">
          <Link href="/teams" className="hover:opacity-75 transition-opacity duration-200">
            <div className="relative w-[91px] h-[22px]">
              <Image src="/tracks/TEAM UP.svg" alt="Team Up" fill className="object-contain" />
            </div>
          </Link>
          {(activeTab === "team-up" || activeTab === "teams") && (
            <div className="absolute -bottom-5 w-[106px] h-[22px] pointer-events-none">
              <Image src="/tracks/Vector 105.svg" alt="" fill className="object-contain" />
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="relative flex flex-col items-center">
          <Link href="/#faq" className="hover:opacity-75 transition-opacity duration-200">
            <div className="relative w-[53px] h-[22px]">
              <Image src="/tracks/FAQ.svg" alt="FAQ" fill className="object-contain" />
            </div>
          </Link>
          {activeTab === "faq" && (
            <div className="absolute -bottom-5 w-[106px] h-[22px] pointer-events-none">
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
          <div className="relative w-[148px] sm:w-[171px] md:w-[205px] aspect-[2.8/1]">
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
