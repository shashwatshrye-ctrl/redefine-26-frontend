"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "../Navigation/head";

export const TEAM_OPTIONS = [
  {
    id: "build-your-team",
    icon: "/teamup/image 24.png",
    textImg: "/teamup/BUILD YOUR TEAM.png",
    alt: "BUILD YOUR TEAM",
    href: "/teamup/build",
  },
  {
    id: "join-a-team",
    icon: "/teamup/image 25.png",
    textImg: "/teamup/JOIN A TEAM.png",
    alt: "JOIN A TEAM",
    href: "/teamup/join",
  },
];

export default function TeamUp() {
  return (
    <main className="hidden min-h-screen w-full overflow-hidden bg-black text-white lg:flex lg:flex-col select-none">
      {/* <Head activeTab="team-up" /> */}

      <div className="grid flex-1 grid-cols-5 items-center gap-8 px-8 pb-8 pt-2 xl:gap-12 xl:px-12 xl:pb-10">
        <section className="col-span-3 flex h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[760/904] h-full max-h-[calc(100vh-6rem)] w-auto max-w-full"
          >
            <Image
              src="/teamup/left_artwork.png"
              alt="People reaching together around a team puzzle"
              fill
              priority
              unoptimized
              className="object-contain"
            />
          </motion.div>
        </section>

        <section className="col-span-2 flex h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex aspect-[522/834] h-full max-h-[calc(100vh-7rem)] w-auto max-w-full flex-col justify-center rounded-xl border border-pink-600 px-[10%] shadow-[0_0_32px_rgba(236,72,153,0.12)] xl:rounded-2xl"
          >
            <div className="flex flex-col gap-8 xl:gap-10">
              {TEAM_OPTIONS.map((option) => (
                <Link key={option.id} href={option.href} className="group block">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="flex aspect-[278/104] w-full flex-col items-center justify-center gap-3 rounded-lg border border-pink-600 px-4 transition-colors duration-300 group-hover:bg-pink-950/20 xl:gap-4 xl:rounded-xl"
                  >
                    <div className="relative aspect-square w-[18%]">
                      <Image src={option.icon} alt="" fill unoptimized className="object-contain" />
                    </div>
                    <div className="relative aspect-[278/37] w-[82%]">
                      <Image src={option.textImg} alt={option.alt} fill unoptimized className="object-contain" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
