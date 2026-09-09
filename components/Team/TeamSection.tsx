"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface TeamMember {
  id: string;
  name: string;
  rollNo: string;
  silhouette: string;
  layout: "silhouette-left" | "silhouette-right";
}

export const DEFAULT_MEMBERS: TeamMember[] = [
  { id: "member-1", name: "Shashwat Shrye", rollNo: "25BEL0010", silhouette: "/team/image 30.png", layout: "silhouette-left" },
  { id: "member-2", name: "Shashwat Shrye", rollNo: "25BEL0010", silhouette: "/team/image 34.png", layout: "silhouette-left" },
  { id: "member-3", name: "Shashwat Shrye", rollNo: "25BEL0010", silhouette: "/team/image 33.png", layout: "silhouette-right" },
  { id: "member-4", name: "Shashwat Shrye", rollNo: "25BEL0010", silhouette: "/team/image 31.png", layout: "silhouette-right" },
];

interface TeamSectionProps {
  teamName?: string;
  members?: TeamMember[];
}

const MAX_INSET_PCT = 24;
const SAMPLES_PER_PANEL = 8;

function insetAt(globalT: number) {
  return MAX_INSET_PCT * Math.sin(Math.PI * globalT);
}

function panelClipPath(index: number, total: number) {
  const points: string[] = [];
  for (let k = 0; k <= SAMPLES_PER_PANEL; k++) {
    const localF = k / SAMPLES_PER_PANEL;
    const globalT = (index + localF) / total;
    const xPct = localF * 100;
    const yPct = insetAt(globalT);
    points.push(`${xPct}% ${yPct}%`);
  }
  points.push("100% 100%", "0% 100%");
  return `polygon(${points.join(", ")})`;
}

export default function TeamSection({
  teamName = "TEAM NAME",
  members = DEFAULT_MEMBERS,
}: TeamSectionProps) {
  return (
    <section
      className="relative flex min-h-screen w-full max-w-none flex-col items-center bg-black text-white select-none overflow-hidden px-0 mx-0"
    >
      {/* Decorative background vectors */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-0 top-[8%] w-[18vw] max-w-[260px] aspect-[162/513]">
          <Image src="/team/Vector 157.png" alt="" fill priority unoptimized className="object-contain opacity-50" />
        </div>
        <div className="absolute top-[2%] right-[15%] w-[38vw] max-w-[550px] aspect-[408/528]">
          <Image src="/team/Vector 157-2.png" alt="" fill priority unoptimized className="object-contain opacity-40" />
        </div>
        <div className="absolute top-[22%] left-[30%] w-[25vw] max-w-[360px] aspect-[330/552]">
          <Image src="/team/Vector 157-1.png" alt="" fill priority unoptimized className="object-contain opacity-35" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-none px-0 pt-8 pb-0">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-[200px] sm:w-[260px] md:w-[360px] lg:w-[440px] xl:w-[500px] aspect-[575/79] my-2"
        >
          {teamName === "TEAM NAME" ? (
            <Image src="/team/TEAM NAME.png" alt="Team Name" fill priority unoptimized className="object-contain" />
          ) : (
            <h2 className="text-center font-extrabold uppercase tracking-widest text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              {teamName}
            </h2>
          )}
        </motion.div>

        {/* Panel row */}
        <div className="relative mt-[clamp(2rem,6vh,9rem)] w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[600px] xl:h-[660px]">
          <div
            className="absolute bottom-0 left-0 right-0 h-10 lg:h-14 z-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.85))" }}
          />

          <div className="relative z-10 flex h-full w-full gap-[6px] sm:gap-[8px] lg:gap-[14px] px-1 sm:px-2 lg:px-0">
            {members.map((member, index) => {
              const isSilhouetteLeft = member.layout === "silhouette-left";
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ scale: 1.01, y: -4 }}
                  className="relative flex-1 h-full group cursor-pointer"
                  style={{ clipPath: panelClipPath(index, members.length) }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, #d6336c 0%, #f06595 55%, #fcdce8 100%)" }}
                  />

                  <div className="relative z-10 flex items-end justify-between h-full px-1 sm:px-2 lg:px-4 pb-[8%]">
                    {isSilhouetteLeft ? (
                      <>
                        <div className="relative h-[64%] w-[54%] flex items-end justify-center">
                          <Image src={member.silhouette} alt={member.name} fill priority unoptimized className="object-contain object-bottom" />
                        </div>
                        <NameBlock member={member} />
                      </>
                    ) : (
                      <>
                        <NameBlock member={member} />
                        <div className="relative h-[64%] w-[54%] flex items-end justify-center">
                          <Image src={member.silhouette} alt={member.name} fill priority unoptimized className="object-contain object-bottom" />
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function NameBlock({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col justify-end items-start text-left w-[44%] space-y-0.5 sm:space-y-1">
      <div className="font-bold text-white text-[10px] sm:text-sm lg:text-xl xl:text-2xl leading-tight tracking-wide">
        {member.name.split(" ").map((word, i) => (
          <span key={i} className="block">{word}</span>
        ))}
      </div>
      <div className="font-mono font-bold text-white/95 text-[8px] sm:text-xs lg:text-sm xl:text-base tracking-wider pt-0.5 sm:pt-1">
        {member.rollNo}
      </div>
    </div>
  );
}
