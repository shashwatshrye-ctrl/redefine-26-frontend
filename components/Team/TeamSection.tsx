"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Head from "../Navigation/head";

export interface TeamMember {
  id: string;
  name: string;
  rollNo: string;
  silhouette: string;
  cardBg: string;
  bgFlip?: boolean;
  reflectionBg: string;
  scribble: string;
  layout: "silhouette-left" | "silhouette-right";
  aspectRatio: string;
}

export const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Tanishka Sharma",
    rollNo: "25BDS0116",
    silhouette: "/team/image 30.png",
    cardBg: "/team/Rectangle 1.png",
    reflectionBg: "/team/Rectangle 28.png",
    scribble: "/team/Vector 257.png",
    layout: "silhouette-left",
    aspectRatio: "aspect-[355/603]",
  },
  {
    id: "member-2",
    name: "Tanishka Sharma",
    rollNo: "25BDS0116",
    silhouette: "/team/image 34.png",
    cardBg: "/team/Rectangle 24.png",
    reflectionBg: "/team/Rectangle 29.png",
    scribble: "/team/Vector 257.png",
    layout: "silhouette-left",
    aspectRatio: "aspect-[355/603]",
  },
  {
    id: "member-3",
    name: "Tanishka Sharma",
    rollNo: "25BDS0116",
    silhouette: "/team/image 33.png",
    cardBg: "/team/Rectangle 24.png",
    bgFlip: true,
    reflectionBg: "/team/Rectangle 29.png",
    scribble: "/team/Vector 257.png",
    layout: "silhouette-right",
    aspectRatio: "aspect-[355/603]",
  },
  {
    id: "member-4",
    name: "Tanishka Sharma",
    rollNo: "25BDS0116",
    silhouette: "/team/image 31.png",
    cardBg: "/team/Rectangle 26.png",
    reflectionBg: "/team/Rectangle 30.png",
    scribble: "/team/Vector 257.png",
    layout: "silhouette-right",
    aspectRatio: "aspect-[355/603]",
  },
];

interface TeamSectionProps {
  teamName?: string;
  members?: TeamMember[];
}

export default function TeamSection({
  teamName = "TEAM NAME",
  members = DEFAULT_MEMBERS,
}: TeamSectionProps) {
  return (
    <main className="hidden lg:flex lg:flex-col min-h-screen w-full max-w-none bg-black text-white relative overflow-hidden select-none px-0 mx-0">
      {/* Header */}
      <Head activeTab="teams" />

      {/* Decorative Background Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left wavy line */}
        <div className="absolute left-0 top-[8%] w-[18vw] max-w-[260px] aspect-[162/513]">
          <Image
            src="/team/Vector 157.png"
            alt=""
            fill
            priority
            unoptimized
            className="object-contain opacity-50"
          />
        </div>

        {/* Center/Right background wavy lines */}
        <div className="absolute top-[2%] right-[15%] w-[38vw] max-w-[550px] aspect-[408/528]">
          <Image
            src="/team/Vector 157-2.png"
            alt=""
            fill
            priority
            unoptimized
            className="object-contain opacity-40"
          />
        </div>

        <div className="absolute top-[22%] left-[30%] w-[25vw] max-w-[360px] aspect-[330/552]">
          <Image
            src="/team/Vector 157-1.png"
            alt=""
            fill
            priority
            unoptimized
            className="object-contain opacity-35"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-between w-full max-w-none px-0 pt-4 pb-0">
        {/* Header Title ("TEAM NAME") */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-[280px] md:w-[360px] lg:w-[440px] xl:w-[500px] aspect-[575/79] my-2"
        >
          {teamName === "TEAM NAME" ? (
            <Image
              src="/team/TEAM NAME.png"
              alt="Team Name"
              fill
              priority
              unoptimized
              className="object-contain"
            />
          ) : (
            <h1 className="text-center font-extrabold uppercase tracking-widest text-2xl lg:text-4xl xl:text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              {teamName}
            </h1>
          )}
        </motion.div>

        {/* Cards Grid — Flush edge to edge (px-0) */}
        <div className="w-full max-w-none px-0 grid grid-cols-4 items-end gap-1 lg:gap-2">
          {members.map((member, index) => {
            const isSilhouetteLeft = member.layout === "silhouette-left";

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="flex flex-col items-center group cursor-pointer w-full"
              >
                {/* Main Card */}
                <div
                  className={`relative w-full scale-[1.02] ${member.aspectRatio} rounded-t-sm overflow-hidden flex items-end justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_12px_40px_rgba(236,72,153,0.25)]`}
                >
                  {/* Card Gradient SVG Background */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={member.cardBg}
                      alt=""
                      fill
                      priority
                      unoptimized
                      className={`object-fill ${member.bgFlip ? "-scale-x-100" : ""
                        }`}
                    />
                  </div>

                  {/* Card Content Overlay */}
                  <div className="relative z-10 w-full h-full flex items-end justify-between p-2 lg:p-3 xl:p-4">
                    {/* Left Section */}
                    {isSilhouetteLeft ? (
                      /* Silhouette on Left */
                      <div className="relative h-[86%] w-[54%] flex items-end justify-center">
                        {/* Brain Scribble INSIDE head outline */}
                        <div className="absolute top-[18%] left-[30%] w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 z-20 pointer-events-none">
                          <Image
                            src={member.scribble}
                            alt=""
                            fill
                            unoptimized
                            className="object-contain opacity-95"
                          />
                        </div>
                        {/* Silhouette Image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={member.silhouette}
                            alt={member.name}
                            fill
                            priority
                            unoptimized
                            className="object-contain object-bottom"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Text on Left */
                      <div className="flex flex-col justify-center items-start text-left w-[48%] pl-2 lg:pl-3 xl:pl-4 mb-6 lg:mb-10 xl:mb-14 z-20 space-y-1">
                        <div className="font-bold text-white text-base lg:text-xl xl:text-2xl leading-tight tracking-wide">
                          {member.name.split(" ").map((word, i) => (
                            <span key={i} className="block">
                              {word}
                            </span>
                          ))}
                        </div>
                        <div className="font-mono font-bold text-white/95 text-xs lg:text-sm xl:text-base tracking-wider pt-1">
                          {member.rollNo}
                        </div>
                      </div>
                    )}

                    {/* Right Section */}
                    {isSilhouetteLeft ? (
                      /* Text on Right */
                      <div className="flex flex-col justify-center items-start text-left w-[48%] pr-2 lg:pr-3 xl:pr-4 mb-6 lg:mb-10 xl:mb-14 z-20 space-y-1">
                        <div className="font-bold text-white text-base lg:text-xl xl:text-2xl leading-tight tracking-wide">
                          {member.name.split(" ").map((word, i) => (
                            <span key={i} className="block">
                              {word}
                            </span>
                          ))}
                        </div>
                        <div className="font-mono font-bold text-white/95 text-xs lg:text-sm xl:text-base tracking-wider pt-1">
                          {member.rollNo}
                        </div>
                      </div>
                    ) : (
                      /* Silhouette on Right */
                      <div className="relative h-[86%] w-[54%] flex items-end justify-center">
                        {/* Brain Scribble INSIDE head outline */}
                        <div className="absolute top-[18%] right-[30%] w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 z-20 pointer-events-none">
                          <Image
                            src={member.scribble}
                            alt=""
                            fill
                            unoptimized
                            className="object-contain opacity-95"
                          />
                        </div>
                        {/* Silhouette Image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={member.silhouette}
                            alt={member.name}
                            fill
                            priority
                            unoptimized
                            className="object-contain object-bottom"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Shadow / Reflection Shape */}
                <div className="relative w-full h-8 lg:h-12 xl:h-16 -mt-1 pointer-events-none opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                  <Image
                    src={member.reflectionBg}
                    alt=""
                    fill
                    unoptimized
                    className={`object-fill ${member.bgFlip ? "-scale-x-100" : ""
                      }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
