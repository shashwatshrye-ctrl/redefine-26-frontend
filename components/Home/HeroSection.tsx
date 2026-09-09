"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-black px-6 text-center select-none">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/8 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-[260px] md:w-[380px] lg:w-[460px] xl:w-[520px] aspect-[575/79]"
        >
          <Image
            src="/redefine-2026/REDEFINE.svg"
            alt="REDEFINE"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative w-[220px] md:w-[320px] lg:w-[400px] xl:w-[440px] aspect-[440/40]"
        >
          <Image
            src="/redefine-2026/REIMAGINE.svg"
            alt="REIMAGINE"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="max-w-xl text-base text-white/60 md:text-lg lg:text-xl"
        >
          A designathon by IEEE CS VIT — where ideas are redefined and reimagined.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="mt-4 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={() =>
              document.getElementById("team-up")?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer rounded-xl bg-pink-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:bg-pink-400"
          >
            Register Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={() =>
              document.getElementById("tracks")?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer rounded-xl border border-pink-600/60 px-8 py-3 text-base font-semibold text-pink-200 transition hover:bg-pink-500/10"
          >
            Explore Tracks
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
