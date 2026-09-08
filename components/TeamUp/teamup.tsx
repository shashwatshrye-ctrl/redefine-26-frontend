"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "../Navigation/head";

export const TEAM_OPTIONS = [
  {
    id: "build-your-team",
    icon: "/teamup/image 24.png",
    label: "/teamup/BUILD YOUR TEAM.png",
    alt: "Build your team",
    href: "/teamup/build",
  },
  {
    id: "join-a-team",
    icon: "/teamup/image 25.png",
    label: "/teamup/JOIN A TEAM.png",
    alt: "Join a team",
    href: "/teamup/join",
  },
];

const panelMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamUp() {
  return (
    <main
      id="team-up"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-black text-white"
    >
      <Head activeTab="team-up" />

      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-8 px-5 pb-10 sm:px-8 md:gap-10 md:px-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-[clamp(2rem,5vw,6rem)] lg:px-[clamp(2.5rem,5vw,7rem)] lg:pb-[clamp(2.5rem,5vh,5rem)] lg:pt-2">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={panelMotion}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex min-h-[18rem] items-end justify-center lg:min-h-0 lg:justify-start"
        >
          <div className="relative aspect-[760/904] w-full max-w-[47.5rem] lg:w-[min(100%,47.5rem)]">
            <Image
              src="/teamup/left_artwork.png"
              alt="Hands joining puzzle pieces to form a team"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="object-contain object-bottom"
            />
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={panelMotion}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="flex aspect-[522/834] min-h-[31rem] w-full max-w-[32.625rem] flex-col justify-center rounded-xl border border-pink-600/90 px-[14%] py-10 shadow-[0_0_32px_rgba(236,72,153,0.13)] sm:min-h-[34rem] sm:rounded-2xl lg:min-h-0">
            <div className="flex flex-col gap-[clamp(1.5rem,4vh,3rem)]">
              {TEAM_OPTIONS.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.22 + index * 0.1 }}
                >
                  <Link
                    href={option.href}
                    aria-label={option.alt}
                    className="group block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.025, y: -3 }}
                      whileTap={{ scale: 0.985 }}
                      transition={{ duration: 0.2 }}
                      className="flex aspect-[371/139] w-full flex-col items-center justify-center gap-[clamp(0.45rem,1.2vw,0.8rem)] rounded-lg border border-pink-600/90 px-5 py-4 transition-colors duration-200 group-hover:bg-pink-500/10 sm:rounded-xl"
                    >
                      <div className="relative aspect-square w-[16%] min-w-8">
                        <Image src={option.icon} alt="" fill className="object-contain" />
                      </div>
                      <div className="relative aspect-[307/34] w-[83%]">
                        <Image src={option.label} alt={option.alt} fill className="object-contain" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
