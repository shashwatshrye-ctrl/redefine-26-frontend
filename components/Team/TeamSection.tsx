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
    name: "Shashwat Shrye",
    rollNo: "25BEL0010",
    silhouette: "/team/image 30.png",
    cardBg: "/team/Rectangle 1.png",
    reflectionBg: "/team/Rectangle 28.png",
    scribble: "/team/Vector 257.png",
    layout: "silhouette-left",
    aspectRatio: "aspect-[355/603]",
  },
  {
    id: "member-2",
    name: "Shashwat Shrye",
    rollNo: "25BEL0010",
    silhouette: "/team/image 34.png",
    cardBg: "/team/Rectangle 24.png",
    reflectionBg: "/team/Rectangle 29.png",
    scribble: "/team/Vector 257.png",
    layout: "silhouette-left",
    aspectRatio: "aspect-[330/506]",
  },
  {
    id: "member-3",
    name: "Shashwat Shrye",
    rollNo: "25BEL0010",
    silhouette: "/team/image 33.png",
    cardBg: "/team/Rectangle 24.png",
    bgFlip: true,
    reflectionBg: "/team/Rectangle 29.png",
    scribble: "/team/Vector 257.png",
    layout: "silhouette-right",
    aspectRatio: "aspect-[330/506]",
  },
  {
    id: "member-4",
    name: "Shashwat Shrye",
    rollNo: "25BEL0010",
    silhouette: "/team/image 31.png",
    cardBg: "/team/Rectangle 26.png",
    reflectionBg: "/team/Rectangle 30.png",
    scribble: "/team/Vector 257.png",
    layout: "silhouette-right",
    aspectRatio: "aspect-[300/603]",
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
    <main className="hidden lg:flex lg:flex-col min-h-screen w-full bg-black text-white relative overflow-hidden select-none">
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
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 lg:px-8 xl:px-12 py-2 scale-[0.82] origin-center -my-6 lg:-my-10">
        {/* Header Title ("TEAM NAME") */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-[250px] md:w-[330px] lg:w-[410px] xl:w-[460px] aspect-[575/79] mb-2 lg:mb-4"
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

        {/* Cards Grid */}
        <div className="w-full max-w-[1120px] mx-auto grid grid-cols-4 items-end gap-2 lg:gap-3 xl:gap-5 pt-2">
          {members.map((member, index) => {
            const isSilhouetteLeft = member.layout === "silhouette-left";

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ scale: 1.025, y: -6 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Main Card */}
                <div
                  className={`relative w-full ${member.aspectRatio} rounded-t-sm overflow-hidden flex items-end justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_12px_40px_rgba(236,72,153,0.25)]`}
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
                    {/* Left Section (Silhouette or Text depending on layout) */}
                    {isSilhouetteLeft ? (
                      /* Silhouette on Left */
                      <div className="relative h-[82%] w-[52%] flex items-end justify-center">
                        {/* Brain Scribble over head */}
                        <div className="absolute -top-3 lg:-top-4 left-[10%] w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 z-20">
                          <Image
                            src={member.scribble}
                            alt=""
                            fill
                            unoptimized
                            className="object-contain"
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
                      <div className="flex flex-col justify-center items-start text-left w-[48%] pl-1 lg:pl-2 xl:pl-3 mb-4 lg:mb-8 xl:mb-10 z-20 space-y-1">
                        <div className="font-bold text-white text-base lg:text-lg xl:text-xl leading-tight tracking-wide">
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

                    {/* Right Section (Text or Silhouette depending on layout) */}
                    {isSilhouetteLeft ? (
                      /* Text on Right */
                      <div className="flex flex-col justify-center items-start text-left w-[48%] pr-1 lg:pr-2 xl:pr-3 mb-4 lg:mb-8 xl:mb-10 z-20 space-y-1">
                        <div className="font-bold text-white text-base lg:text-lg xl:text-xl leading-tight tracking-wide">
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
                      <div className="relative h-[82%] w-[52%] flex items-end justify-center">
                        {/* Brain Scribble over head */}
                        <div className="absolute -top-3 lg:-top-4 right-[10%] w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 z-20">
                          <Image
                            src={member.scribble}
                            alt=""
                            fill
                            unoptimized
                            className="object-contain"
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
                <div className="relative w-full h-8 lg:h-11 xl:h-13 -mt-1 pointer-events-none opacity-80 transition-opacity duration-300 group-hover:opacity-100">
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
