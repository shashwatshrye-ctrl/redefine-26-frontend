"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
  img: string;
  width: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Timeline", href: "/timeline", img: "/tracks/TIMELINE.svg", width: "135px" },
  { label: "Tracks", href: "/tracks", img: "/tracks/TRACKS.svg", width: "118px" },
  { label: "Team Up", href: "/team-up", img: "/tracks/TEAM UP.svg", width: "118px" },
  { label: "FAQ", href: "/faq", img: "/tracks/FAQ.svg", width: "70px" },
];

export default function SiteHeader({ hideRegisterButton }: { hideRegisterButton?: boolean } = {}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isRegisterPage = hideRegisterButton || pathname === "/register";

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    router.push(href);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-50 m-0 flex w-full max-w-none items-center justify-between border-b border-white/5 bg-black/95 px-5 py-5 backdrop-blur-md sm:px-8 md:px-12 md:py-6 lg:px-10 lg:py-7 xl:px-16"
      >
        {/* Left: Logo */}
        <Link href="/" className="relative h-12 w-12 shrink-0 transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[70px] lg:w-[70px] xl:h-20 xl:w-20">
          <Image
            src="/redefine-2026/redefine.jpeg"
            alt="Redefine Logo"
            fill
            priority
            unoptimized
            className="object-contain"
          />
        </Link>

        {/* Center: SVG Menu Links (Desktop) */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-10 xl:gap-16">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative flex flex-col items-center">
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-75"
              >
                <div className="relative h-[28px] md:h-[32px]" style={{ width: link.width }}>
                  <Image src={link.img} alt={link.label} fill className="object-contain" />
                </div>
              </Link>
              {isActive(link.href) && <div className="mt-1.5 h-1 w-1 rounded-full bg-pink-500" />}
            </div>
          ))}
        </nav>

        {/* Right: Register + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Register Button (hidden on small mobile, shown on sm+, hidden on register page) */}
          {!isRegisterPage ? (
            <motion.button
              type="button"
              onClick={() => router.push("/register")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="hidden cursor-pointer select-none transition-transform duration-200 hover:-translate-y-0.5 sm:block"
              aria-label="Register"
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
          ) : (
            <div className="hidden lg:block w-12 sm:w-14 md:w-16 lg:w-[70px] xl:w-20 pointer-events-none" aria-hidden="true" />
          )}

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="block h-0.5 w-6 bg-white"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-black/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: idx * 0.06, duration: 0.3, ease: "easeOut" }}
                  onClick={() => handleNavClick(link.href)}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="relative h-[26px]" style={{ width: link.width }}>
                    <Image src={link.img} alt={link.label} fill className="object-contain" />
                  </div>
                  <span className={`text-sm ${isActive(link.href) ? "text-white" : "text-white/50"}`}>{link.label}</span>
                </motion.button>
              ))}

              {!isRegisterPage && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.3, ease: "easeOut" }}
                  onClick={() => handleNavClick("/register")}
                  className="mt-4 cursor-pointer rounded-xl bg-pink-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/25 transition-transform hover:scale-105"
                >
                  Register
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
