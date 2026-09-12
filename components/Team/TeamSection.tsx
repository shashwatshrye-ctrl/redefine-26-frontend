"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DesktopBackgroundThreads from "@/components/Team/DesktopBackgroundThreads";

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
  onReset?: () => void;
}

const MAX_INSET_PCT = 18;
const SAMPLES_PER_PANEL = 12;

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

function SilhouetteBlock({ member }: { member: TeamMember }) {
  return (
    <div className="relative h-[85%] sm:h-[88%] lg:h-[90%] w-[58%] sm:w-[62%] lg:w-[66%] flex flex-col items-center justify-end z-20 pointer-events-none self-end">
      {/* Silhouette Image */}
      <div className="relative w-full h-full min-h-0">
        <Image
          src={member.silhouette}
          alt={member.name}
          fill
          priority
          unoptimized
          className="object-contain object-bottom drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
        />
        {/* Brain graphic over head */}
        <div className="absolute top-[1%] sm:top-[2%] w-[24%] aspect-square z-30 pointer-events-none left-1/2 -translate-x-1/2">
          <Image
            src="/team/image 35.png"
            alt=""
            fill
            unoptimized
            className="object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}

function NameBlock({ member, layout }: { member: TeamMember; layout: "silhouette-left" | "silhouette-right" }) {
  return (
    <div
      className={`absolute top-[32%] sm:top-[35%] lg:top-[38%] ${
        layout === "silhouette-left"
          ? "right-2 sm:right-4 lg:right-6 text-left"
          : "left-2 sm:left-4 lg:left-6 text-left"
      } flex flex-col justify-center items-start w-[44%] z-30 space-y-1 sm:space-y-2 pointer-events-none`}
    >
      <div className="font-extrabold text-white text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        {member.name.split(" ").map((word, i) => (
          <span key={i} className="block">{word}</span>
        ))}
      </div>
      <div className="font-mono font-bold text-white/95 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg tracking-wider pt-0.5 sm:pt-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
        {member.rollNo}
      </div>
    </div>
  );
}

export default function TeamSection({
  teamName = "TEAM NAME",
  members = DEFAULT_MEMBERS,
}: TeamSectionProps) {
  return (
    <section className="relative flex h-full w-full max-w-none flex-col items-center justify-between bg-black text-white select-none overflow-hidden px-0 mx-0">
      <DesktopBackgroundThreads />

      {/* Background vectors */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-0 top-[8%] w-[18vw] max-w-[260px] aspect-[162/513]">
          <Image src="/team/Vector 157.png" alt="" fill priority unoptimized className="object-contain opacity-40" />
        </div>
        <div className="absolute top-[2%] right-[15%] w-[38vw] max-w-[550px] aspect-[408/528]">
          <Image src="/team/Vector 157-2.png" alt="" fill priority unoptimized className="object-contain opacity-35" />
        </div>
        <div className="absolute top-[22%] left-[30%] w-[25vw] max-w-[360px] aspect-[330/552]">
          <Image src="/team/Vector 157-1.png" alt="" fill priority unoptimized className="object-contain opacity-30" />
        </div>
      </div>

      <div className="relative z-10 flex h-full min-h-0 w-full max-w-none flex-col items-center px-0 pt-2 sm:pt-4 pb-0">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-[240px] sm:w-[340px] md:w-[440px] lg:w-[540px] xl:w-[600px] aspect-[575/79] shrink-0 mt-1 sm:mt-2"
        >
          {teamName === "TEAM NAME" ? (
            <Image src="/team/TEAM NAME.png" alt="Team Name" fill priority unoptimized className="object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.35)]" />
          ) : (
            <h2 className="text-center font-extrabold uppercase tracking-widest text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]">
              {teamName}
            </h2>
          )}
        </motion.div>

        {/* 4 Blade Panels Container (100% height touching bottom of screen) */}
        <div className="relative mt-2 sm:mt-4 w-full flex-1 min-h-0 flex flex-col justify-end pb-0">
          <div className="relative z-10 flex h-full w-full gap-[4px] sm:gap-[8px] lg:gap-[14px] px-1 sm:px-2 lg:px-4">
            {members.map((member, index) => {
              const isSilhouetteLeft = member.layout === "silhouette-left";
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="relative flex-1 h-full flex flex-col items-center group cursor-pointer"
                >
                  {/* Pink Blade Background Panel - Touches bottom of screen */}
                  <div
                    className="absolute inset-0 w-full h-full shadow-[0_16px_36px_rgba(0,0,0,0.65)]"
                    style={{
                      clipPath: panelClipPath(index, members.length),
                      background: "linear-gradient(180deg, #be265d 0%, #d83973 45%, #f48ab0 100%)",
                    }}
                  />

                  {/* Content Layer */}
                  <div className="relative z-10 flex items-end justify-between h-full w-full px-2 sm:px-3 lg:px-5 pb-2 sm:pb-4">
                    {isSilhouetteLeft ? (
                      <>
                        <SilhouetteBlock member={member} />
                        <NameBlock member={member} layout="silhouette-left" />
                      </>
                    ) : (
                      <>
                        <NameBlock member={member} layout="silhouette-right" />
                        <SilhouetteBlock member={member} />
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Ground shadow touching bottom edge of screen */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-28 pointer-events-none z-20"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.95) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
