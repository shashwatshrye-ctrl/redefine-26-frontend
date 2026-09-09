"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export type Track = {
  id: string;
  name: string;
};

export const DEFAULT_TRACKS: Track[] = [
  { id: "e-commerce", name: "E-Commerce" },
  { id: "education", name: "Smart Education" },
  { id: "healthcare", name: "Healthcare Companion" },
  { id: "travel", name: "Travel & Exploration" },
  { id: "finance", name: "Finance" },
  { id: "social-impact", name: "Social Impact Platform" },
];

type BuildTeamProps = {
  tracks?: Track[];
  initialTeamName?: string;
  initialTrackId?: string;
  onFinalize?: (team: { name: string; trackId: string }) => void;
};

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function FieldLabel({ icon, label, alt }: { icon: string; label: string; alt: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 w-9 shrink-0">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <div className="relative h-7 w-auto" style={{ aspectRatio: label.includes("TEAM") ? "155 / 26" : "84 / 26" }}>
        <Image src={label} alt={alt} fill className="object-contain object-left" />
      </div>
    </div>
  );
}

function TeamIllustration() {
  const hands = [
    { src: "/buildteam/image 19.svg", className: "h-[72%]" },
    { src: "/buildteam/image 20.svg", className: "h-[64%]" },
    { src: "/buildteam/image 21.svg", className: "h-[80%]" },
    { src: "/buildteam/image 22.svg", className: "h-[68%]" },
  ];
  const letters = [
    { src: "/buildteam/T.svg", className: "w-[15%]" },
    { src: "/buildteam/E.svg", className: "w-[15%]" },
    { src: "/buildteam/A.svg", className: "w-[16%]" },
    { src: "/buildteam/M.svg", className: "w-[19%]" },
    { src: "/buildteam/U.svg", className: "w-[18%]" },
    { src: "/buildteam/P.svg", className: "w-[17%]" },
  ];

  return (
    <div className="relative aspect-[760/904] w-full max-w-[47.5rem] overflow-hidden">
      <Image
        src="/buildteam/image 23.svg"
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

export default function BuildTeam({
  tracks = DEFAULT_TRACKS,
  initialTeamName = "",
  initialTrackId = "",
  onFinalize,
}: BuildTeamProps) {
  const [teamName, setTeamName] = useState(initialTeamName);
  const [trackId, setTrackId] = useState(initialTrackId);
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!teamName.trim() || !trackId) {
      setError("Add a team name and select a track to continue.");
      return;
    }

    setError("");
    onFinalize?.({ name: teamName.trim(), trackId });
  };

  return (
    <main className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-black text-white">

      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-8 px-5 pb-10 sm:px-8 md:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-[clamp(1rem,2vw,2rem)] lg:px-[clamp(2rem,5vw,6rem)] lg:pb-[clamp(2.5rem,5vh,5rem)] lg:pt-2">
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
            <div className="flex flex-1 flex-col gap-[clamp(1.5rem,3.5vh,2.5rem)]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-12 w-12">
                  <Image src="/buildteam/image 24.svg" alt="" fill className="object-contain" />
                </div>
                <div className="relative aspect-[307/34] w-full max-w-[19.2rem]">
                  <Image src="/buildteam/BUILD YOUR TEAM.svg" alt="Build your team" fill className="object-contain" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <FieldLabel icon="/buildteam/image 27.svg" label="/buildteam/TEAM NAME.svg" alt="Team name" />
                  <input
                    value={teamName}
                    onChange={(event) => setTeamName(event.target.value)}
                    placeholder="Enter your team name"
                    maxLength={48}
                    className="h-12 w-full rounded-xl border border-pink-600 bg-transparent px-5 text-base text-white outline-none transition placeholder:text-white/55 focus:border-pink-300 focus:ring-2 focus:ring-pink-300/20"
                  />
                </div>

                <div className="space-y-2">
                  <FieldLabel icon="/buildteam/image 27.svg" label="/buildteam/TRACK.svg" alt="Track" />
                  <div className="relative">
                    <select
                      value={trackId}
                      onChange={(event) => setTrackId(event.target.value)}
                      className="h-12 w-full appearance-none rounded-xl border border-pink-600 bg-black px-5 pr-12 text-base text-white outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-300/20"
                    >
                      <option value="" disabled>
                        Select a track
                      </option>
                      {tracks.map((track) => (
                        <option key={track.id} value={track.id}>
                          {track.name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                      <Image src="/buildteam/Polygon 10.svg" alt="" width={19} height={13} />
                    </div>
                  </div>
                </div>
              </div>

              {error && <p role="alert" className="text-sm text-pink-200">{error}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.2 }}
              className="relative mt-6 flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-pink-400 shadow-[0_10px_25px_rgba(236,72,153,0.18)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-200"
            >
              <Image src="/buildteam/FINALISE TEAM.svg" alt="Finalise team" width={125} height={17} />
            </motion.button>
          </form>
        </motion.section>
      </div>
    </main>
  );
}
