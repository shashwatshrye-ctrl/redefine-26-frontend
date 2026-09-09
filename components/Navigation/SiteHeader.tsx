"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
  activeTab: "timeline" | "tracks" | "team-up" | "faq";
  img: string;
  width: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Timeline", href: "#timeline", activeTab: "timeline", img: "/tracks/TIMELINE.svg", width: "135px" },
  { label: "Tracks", href: "#tracks", activeTab: "tracks", img: "/tracks/TRACKS.svg", width: "118px" },
  { label: "Team Up", href: "#team-up", activeTab: "team-up", img: "/tracks/TEAM UP.svg", width: "118px" },
  { label: "FAQ", href: "#faq", activeTab: "faq", img: "/tracks/FAQ.svg", width: "70px" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeTab: NavLink["activeTab"] | undefined =
    pathname.startsWith("/teamup")
      ? "team-up"
      : pathname.startsWith("/timeline")
      ? "timeline"
      : pathname.startsWith("/tracks")
      ? "tracks"
      : pathname.startsWith("/teams")
      ? "team-up"
      : undefined;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 m-0 flex w-full max-w-none items-center justify-between border-b border-white/5 bg-black/90 px-5 py-7 backdrop-blur-md sm:px-8 md:px-12 md:py-9 lg:px-10 lg:py-10 xl:px-16">
        {/* Left: Logo */}
        <Link href="/" className="relative h-[72px] w-[165px] shrink-0 transition-transform hover:scale-105 md:h-[82px] md:w-[205px] lg:h-[82px] lg:w-[190px] xl:h-[90px] xl:w-[225px]">
          <Image
            src="/redefine-2026/logo.svg"
            alt="Redefine Logo"
            fill
            priority
            unoptimized
            className="object-contain"
          />
        </Link>

        {/* Center: SVG Menu Links (Desktop) */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-10 xl:gap-16">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.activeTab;
            return (
              <div key={link.label} className="relative flex flex-col items-center">
                <Link
                  href={link.href}
                  className="transition duration-200 hover:-translate-y-0.5 hover:opacity-75"
                >
                  <div className="relative h-[28px] md:h-[32px]" style={{ width: link.width }}>
                    <Image src={link.img} alt={link.label} fill className="object-contain" />
                  </div>
                </Link>
                {isActive && (
                  <div className="pointer-events-none absolute -bottom-6 h-[28px] w-[135px] md:h-[32px] md:w-[155px]">
                    <Image src="/tracks/Vector 105.svg" alt="" fill className="object-contain" />
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Register + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Register Button (hidden on small mobile, shown on sm+) */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="hidden cursor-pointer select-none transition-transform duration-200 hover:-translate-y-0.5 sm:block"
          >
            <div className="relative aspect-[2.8/1] w-[175px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[275px]">
              <Image
                src="/redefine-2026/register.svg"
                alt="Register"
                fill
                priority
                className="pointer-events-none select-none object-contain"
              />
            </div>
          </motion.button>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-white transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white transition-colors"
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="relative h-[26px]" style={{ width: link.width }}>
                    <Image src={link.img} alt={link.label} fill className="object-contain" />
                  </div>
                  <span className="text-sm text-white/50">{link.label}</span>
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
                className="mt-4 rounded-xl bg-pink-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/25"
              >
                Register
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
