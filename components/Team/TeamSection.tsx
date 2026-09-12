"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DesktopBackgroundThreads from "@/components/Team/DesktopBackgroundThreads";

export interface TeamMember {
  id: string;
  name: string;
  rollNo: string;
  silhouette?: string;
  layout?: "silhouette-left" | "silhouette-right";
}

export const DEFAULT_MEMBERS: TeamMember[] = [
  { id: "member-1", name: "Shashwat Shrye", rollNo: "25BEL0010" },
  { id: "member-2", name: "Shashwat Shrye", rollNo: "25BEL0010" },
  { id: "member-3", name: "Shashwat Shrye", rollNo: "25BEL0010" },
  { id: "member-4", name: "Shashwat Shrye", rollNo: "25BEL0010" },
];

interface TeamSectionProps {
  teamName?: string;
  members?: TeamMember[];
  onReset?: () => void;
}

export default function TeamSection({
  teamName = "TEAM NAME",
  members = DEFAULT_MEMBERS,
}: TeamSectionProps) {
  const displayMembers = members.slice(0, 4);

  return (
    <section className="relative flex h-full w-full max-w-none flex-col items-center justify-between bg-black text-white select-none overflow-hidden px-0 mx-0">
      <DesktopBackgroundThreads />

      <div className="relative z-10 flex h-full min-h-0 w-full max-w-none flex-col items-center px-2 sm:px-4 pt-2 sm:pt-4 pb-0">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-[240px] sm:w-[340px] md:w-[440px] lg:w-[540px] xl:w-[600px] aspect-[575/79] shrink-0 mt-1 sm:mt-2"
        >
          {teamName === "TEAM NAME" ? (
            <Image
              src="/team/TEAM NAME.png"
              alt="Team Name"
              fill
              priority
              unoptimized
              className="object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.35)]"
            />
          ) : (
            <h2 className="text-center font-extrabold uppercase tracking-widest text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]">
              {teamName}
            </h2>
          )}
        </motion.div>

        {/* Main Artwork Container featuring team.svg - Scaled Big */}
        <div className="relative mt-1 sm:mt-2 w-full flex-1 min-h-0 flex flex-col justify-end items-center pb-0 px-0">
          <div className="relative w-full h-full flex flex-col justify-end items-center overflow-visible">
            <div className="relative w-full aspect-[1440/685] max-h-[92vh] min-h-[300px] flex items-end justify-center">
              <Image
                src="/team.svg"
                alt="Team Artwork"
                fill
                priority
                sizes="100vw"
                className="object-contain object-bottom scale-[1.18] sm:scale-[1.20] lg:scale-[1.22] origin-bottom"
              />

              {/* Dynamic Member Names & Roll Numbers overlay matching reference image */}
              <div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none z-10 scale-[1.05] origin-bottom">
                {displayMembers.map((member, index) => {
                  const isLeftPanel = index < 2; // Panels 1 & 2 have text on right side of panel
                  return (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative h-full w-full flex flex-col justify-center items-start ${
                        isLeftPanel
                          ? "pl-[46%] sm:pl-[48%] lg:pl-[50%] pr-1 sm:pr-2"
                          : "pl-[6%] sm:pl-[8%] lg:pl-[10%] pr-[40%]"
                      } pt-[4%] sm:pt-[6%]`}
                    >
                      <div className="font-extrabold text-white text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] text-left">
                        {member.name.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </div>
                      <div className="font-mono font-bold text-white/95 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg tracking-wider pt-1.5 sm:pt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] text-left">
                        {member.rollNo}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

