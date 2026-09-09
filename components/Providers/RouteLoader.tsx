"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RouteLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505]"
      role="status"
      aria-label="Loading Redefine"
    >
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[45vw] w-[45vw] max-h-[650px] max-w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/[0.045] blur-[140px]"
      />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative flex w-full max-w-sm flex-col items-center px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* Logo glow */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-8 rounded-[2rem] bg-pink-500/10 blur-2xl"
          />

          {/* Logo container */}
          <div className="relative h-24 w-24 overflow-hidden rounded-[1.35rem] bg-white/[0.03] ring-1 ring-white/10 sm:h-28 sm:w-28">
            <Image
              src="/redefine-2026/redefine.jpeg"
              alt="Redefine"
              fill
              priority
              unoptimized
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-9 flex flex-col items-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-white/10" />

            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-pink-400/90">
              Redefine
            </p>

            <span className="h-px w-7 bg-white/10" />
          </div>

          <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.35em] text-white/30">
            Designathon · 2026
          </p>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.45,
          }}
          className="mt-10 h-px w-36 overflow-hidden bg-white/[0.08]"
        >
          <motion.div
            className="h-full w-1/2 bg-pink-500"
            animate={{
              x: ["-100%", "300%"],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className="mt-6 flex items-center gap-3 text-[8px] uppercase tracking-[0.28em] text-white/20"
        >
          <span>IEEE CS</span>

          <span className="h-0.5 w-0.5 rounded-full bg-white/20" />

          <span>VIT Vellore</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
