"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DesktopBackgroundThreads from "@/components/Team/DesktopBackgroundThreads";
import DynamicStringsBackground from "@/components/Background/DynamicStringsBackground";

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

const MOBILE_PANEL_CONFIGS = [
  {
    silhouette: "/team/image 30.png",
    align: "left" as const,
    silhouetteClass: "left-1 sm:left-4 md:left-8 bottom-0 w-[95px] sm:w-[130px] md:w-[160px] h-[135px] sm:h-[175px] md:h-[210px]",
    brainClass: "left-[50px] sm:left-[70px] md:left-[90px] top-[10px] sm:top-[16px] w-5 sm:w-7 md:w-9 h-5 sm:h-7 md:h-9",
    textClass: "pl-[105px] sm:pl-[150px] md:pl-[190px] pr-4 items-start text-left",
  },
  {
    silhouette: "/team/image 34.png",
    align: "right" as const,
    silhouetteClass: "right-1 sm:right-4 md:right-8 bottom-0 w-[95px] sm:w-[130px] md:w-[160px] h-[135px] sm:h-[175px] md:h-[210px]",
    brainClass: "right-[50px] sm:right-[70px] md:right-[90px] top-[8px] sm:top-[14px] w-5 sm:w-7 md:w-9 h-5 sm:h-7 md:h-9",
    textClass: "pl-6 sm:pl-12 md:pl-16 pr-[105px] sm:pr-[150px] md:pr-[190px] items-start text-left",
  },
  {
    silhouette: "/team/image 33.png",
    align: "left" as const,
    silhouetteClass: "left-1 sm:left-4 md:left-8 bottom-0 w-[100px] sm:w-[135px] md:w-[165px] h-[135px] sm:h-[175px] md:h-[210px]",
    brainClass: "left-[50px] sm:left-[70px] md:left-[90px] top-[8px] sm:top-[14px] w-5 sm:w-7 md:w-9 h-5 sm:h-7 md:h-9",
    textClass: "pl-[105px] sm:pl-[150px] md:pl-[190px] pr-4 items-start text-left",
  },
  {
    silhouette: "/team/image 31.png",
    align: "right" as const,
    silhouetteClass: "right-1 sm:right-4 md:right-8 bottom-0 w-[95px] sm:w-[130px] md:w-[160px] h-[135px] sm:h-[175px] md:h-[210px]",
    brainClass: "right-[50px] sm:right-[70px] md:right-[90px] top-[8px] sm:top-[14px] w-5 sm:w-7 md:w-9 h-5 sm:h-7 md:h-9",
    textClass: "pl-6 sm:pl-12 md:pl-16 pr-[105px] sm:pr-[150px] md:pr-[190px] items-start text-left",
  },
];

export default function TeamSection({
  teamName = "TEAM NAME",
  members = DEFAULT_MEMBERS,
}: TeamSectionProps) {
  const displayMembers = members.length > 0 ? members.slice(0, 4) : DEFAULT_MEMBERS;

  return (
    <section className="relative flex h-full w-full max-w-none flex-col items-center justify-between bg-black text-white select-none overflow-x-hidden px-0 mx-0">
      {/* Background animated threads */}
      <div className="hidden lg:block w-full h-full">
        <DesktopBackgroundThreads />
      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET / MEDIUM VIEW (Screens < 1024px: sm, md)                  */}
      {/* ========================================================================= */}
      <div className="flex flex-col lg:hidden w-full h-full min-h-screen bg-black relative isolate pb-6">
        {/* Dynamic Strings background on mobile top */}
        <DynamicStringsBackground opacity={0.5} />

        {/* Mobile Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 flex flex-col items-center justify-center pt-5 pb-4 px-4 text-center"
        >
          {teamName === "TEAM NAME" ? (
            <div className="relative w-[200px] sm:w-[280px] md:w-[360px] h-10 sm:h-14 md:h-16">
              <Image
                src="/team/TEAM NAME.png"
                alt="Team Name"
                fill
                priority
                unoptimized
                className="object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.4)]"
              />
            </div>
          ) : (
            <h2 className="font-extrabold uppercase tracking-widest text-2xl sm:text-4xl md:text-5xl text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.5)]">
              {teamName}
            </h2>
          )}
        </motion.div>

        {/* 4 Stacked Vertical Gradient Panels matching the reference screenshot */}
        <div className="relative z-10 flex flex-col w-full flex-1 divide-y-4 divide-black border-y-4 border-black">
          {displayMembers.map((member, index) => {
            const config = MOBILE_PANEL_CONFIGS[index % MOBILE_PANEL_CONFIGS.length];
            return (
              <motion.div
                key={member.id || index}
                initial={{ opacity: 0, x: config.align === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full h-[145px] sm:h-[185px] md:h-[225px] overflow-hidden bg-[linear-gradient(180deg,#9B1A45_0%,#CE3566_55%,#F3799D_100%)] flex items-center shadow-[inset_0_0_24px_rgba(0,0,0,0.3)]"
              >
                {/* Silhouette Image */}
                <div className={`absolute z-10 ${config.silhouetteClass}`}>
                  <Image
                    src={member.silhouette || config.silhouette}
                    alt={member.name}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Brain Graphic on Silhouette Head */}
                <div className={`absolute z-20 pointer-events-none ${config.brainClass}`}>
                  <Image
                    src="/team/image 35.png"
                    alt=""
                    fill
                    className="object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
                  />
                </div>

                {/* Member Text Info (Name & Roll Number) */}
                <div className={`relative z-20 flex flex-col justify-center w-full ${config.textClass}`}>
                  <h3 className="font-extrabold uppercase text-white text-base sm:text-2xl md:text-3xl leading-snug tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {member.name.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h3>
                  <p className="font-mono font-bold text-white/95 text-xs sm:text-base md:text-xl tracking-widest mt-1 sm:mt-2.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                    {member.rollNo}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW (Screens >= 1024px: lg, xl)                                   */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative z-10 h-full min-h-0 w-full max-w-none flex-col items-center px-2 sm:px-4 pt-2 sm:pt-4 pb-0">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-[540px] xl:w-[600px] aspect-[575/79] shrink-0 mt-1 sm:mt-2"
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
            <h2 className="text-center font-extrabold uppercase tracking-widest text-5xl xl:text-6xl text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]">
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
                      key={member.id || index}
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
                      <div className="font-extrabold text-white text-2xl xl:text-3xl leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] text-left">
                        {member.name.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </div>
                      <div className="font-mono font-bold text-white/95 text-base xl:text-lg tracking-wider pt-1.5 sm:pt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] text-left">
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


