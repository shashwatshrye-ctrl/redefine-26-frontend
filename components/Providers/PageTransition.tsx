"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import RouteLoader from "./RouteLoader";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const prevPath = useRef(pathname);
  const currentPath = useRef(pathname);
  const safetyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    currentPath.current = pathname;
  }, [pathname]);

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show the loader while a route transition is in flight, and keep it up
  // (up to a safety cap) until the incoming page finishes entering.
  useEffect(() => {
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      setLoading(true);
      if (safetyTimer.current) clearTimeout(safetyTimer.current);
      safetyTimer.current = setTimeout(() => setLoading(false), 4000);
      return () => {
        if (safetyTimer.current) clearTimeout(safetyTimer.current);
      };
    }
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="h-dvh w-full overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: EASE }}
          onAnimationComplete={() => {
            if (currentPath.current === pathname) setLoading(false);
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>{loading && <RouteLoader />}</AnimatePresence>
    </>
  );
}