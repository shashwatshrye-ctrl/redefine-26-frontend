"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Head from "../Navigation/head";

type TeamCodeProps = {
  initialTeamCode?: string;
  onDone?: (teamCode: string) => void;
};

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function TeamIllustration() {
  const hands = [
    { src: "/teamcode/image 19.svg", className: "h-[72%]" },
    { src: "/teamcode/image 20.svg", className: "h-[64%]" },
    { src: "/teamcode/image 21.svg", className: "h-[80%]" },
    { src: "/teamcode/image 22.svg", className: "h-[68%]" },
  ];
  const letters = [
    { src: "/teamcode/T.svg", className: "w-[15%]" },
    { src: "/teamcode/E.svg", className: "w-[15%]" },
    { src: "/teamcode/A.svg", className: "w-[16%]" },
    { src: "/teamcode/M.svg", className: "w-[19%]" },
    { src: "/teamcode/U.svg", className: "w-[18%]" },
    { src: "/teamcode/P.svg", className: "w-[17%]" },
  ];

  return (
    <div className="relative aspect-[760/904] w-full max-w-[47.5rem] overflow-hidden">
      <Image
        src="/teamcode/image 23.svg"
        alt="Pink puzzle pieces"
        fill
        priority
        sizes="(min-width: 1024px) 52vw, 92vw"
        className="object-contain object-top"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 grid h-[54%] grid-cols-4 items-end px-[3%]">
        {hands.map((hand) => (
          <div key={hand.src} className="relative flex h-full items-end justify-center">
            <div className={`relative w-full ${hand.className}`}>
              <Image src={hand.src} alt="" fill className="object-contain object-bottom" />
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute left-[3%] top-[44%] flex h-[24%] w-[70%] items-center justify-center gap-[1%] rotate-[8deg]">
        {letters.map((letter) => (
          <div key={letter.src} className={`relative h-full shrink-0 ${letter.className}`}>
            <Image src={letter.src} alt="" fill sizes="12vw" className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamCode({ initialTeamCode = "", onDone }: TeamCodeProps) {
  const [teamCode, setTeamCode] = useState(initialTeamCode);
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!teamCode.trim()) {
      setError("Enter your team code to continue.");
      return;
    }

    setError("");
    onDone?.(teamCode.trim());
  };

  return (
    <main className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-black text-white">
      <Head activeTab="team-up" />

      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-8 px-5 pb-10 sm:px-8 md:gap-10 md:px-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-[clamp(2rem,5vw,6rem)] lg:px-[clamp(2.5rem,5vw,7rem)] lg:pb-[clamp(2.5rem,5vh,5rem)] lg:pt-2">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex min-h-[18rem] items-end justify-center lg:min-h-0 lg:justify-start"
        >
          <TeamIllustration />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="flex items-center justify-center lg:justify-end"
        >
          <form
            noValidate
            onSubmit={submit}
            className="flex aspect-[526/834] min-h-[31rem] w-full max-w-[32.875rem] flex-col rounded-xl border border-pink-600/90 px-[clamp(1.5rem,6vw,4rem)] pb-[clamp(2rem,5vw,3.5rem)] pt-[clamp(1.25rem,2vw,2rem)] shadow-[0_0_32px_rgba(236,72,153,0.13)] sm:min-h-[34rem] sm:rounded-2xl lg:min-h-0"
          >
            <div className="flex flex-1 flex-col justify-center gap-[clamp(1.5rem,3.5vh,2.5rem)]">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 shrink-0">
                    <Image src="/teamcode/image 27.svg" alt="" fill className="object-contain" />
                  </div>
                  <div className="relative aspect-[155/26] h-7 w-auto">
                    <Image src="/teamcode/TEAM CODE.svg" alt="Team code" fill className="object-contain object-left" />
                  </div>
                </div>
                <input
                  value={teamCode}
                  onChange={(event) => setTeamCode(event.target.value)}
                  aria-label="Team code"
                  maxLength={48}
                  className="h-20 w-full rounded-xl border border-pink-600 bg-transparent px-5 text-base uppercase tracking-[0.12em] text-white outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-300/20"
                />
              </div>
              {error && <p role="alert" className="text-sm text-pink-200">{error}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.2 }}
              className="relative mt-6 flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-pink-400 shadow-[0_10px_25px_rgba(236,72,153,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-200"
            >
              <Image src="/teamcode/DONE.svg" alt="Done" width={62} height={17} />
            </motion.button>
          </form>
        </motion.section>
      </div>
    </main>
  );
}
