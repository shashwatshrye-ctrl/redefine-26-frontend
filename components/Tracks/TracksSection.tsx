"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrackData {
  id: number;
  title: string;
  titleImg: string;
  bladeSvg: string;
  illustration: string;
  left: string;
  width: string;
  titlePos: { left: string; top: string };
  titleWidth: string;
  hoverX: number;
  hoverY: number;
  titleAspect: string;

  // Mobile layout properties
  mobileBlade: string;
  mobileTitle: string;
  mobileTitlePos: { left: string; top: string };
  mobileTitleWidth: string;
  mobileTitleAspect: string;
  mobileHoverX: number;
  mobileHoverY: number;
  mobileHeight: string;
  mobileAlign: "bottom" | "top";
}

const tracks: TrackData[] = [
  {
    id: 1,
    title: "E-Commerce",
    titleImg: "/tracks/01\u2028E-Commerce.png",
    bladeSvg: "/tracks/Mask group.svg",
    illustration: "/tracks/illustration_1.png",
    left: "-0.7%",
    width: "50.56%",
    titlePos: { left: "26%", top: "16%" },
    titleWidth: "16%",
    hoverX: -15,
    hoverY: -8,
    titleAspect: "149/75",

    // Mobile properties
    mobileBlade: "/tracks mobile/Mask group.png",
    mobileTitle: "/tracks mobile/01\u2028E-Commerce.png",
    mobileTitlePos: { left: "70%", top: "18%" },
    mobileTitleWidth: "25%",
    mobileTitleAspect: "73/36",
    mobileHoverX: 10,
    mobileHoverY: -8,
    mobileHeight: "50.5%",
    mobileAlign: "bottom",
  },
  {
    id: 2,
    title: "Smart Education",
    titleImg: "/tracks/02\u2028Smart Education.png",
    bladeSvg: "/tracks/Mask group-1.svg",
    illustration: "/tracks/illustration_2.png",
    left: "18.3%",
    width: "31.28%",
    titlePos: { left: "30%", top: "15%" },
    titleWidth: "18%",
    hoverX: -10,
    hoverY: -13,
    titleAspect: "119/113",

    // Mobile properties
    mobileBlade: "/tracks mobile/Mask group-1.png",
    mobileTitle: "/tracks mobile/02\u2028Smart Education.png",
    mobileTitlePos: { left: "72%", top: "22%" },
    mobileTitleWidth: "22%",
    mobileTitleAspect: "58/54",
    mobileHoverX: 12,
    mobileHoverY: -5,
    mobileHeight: "31.33%",
    mobileAlign: "bottom",
  },
  {
    id: 3,
    title: "Healthcare Companion",
    titleImg: "/tracks/03\u2028Healthcare Companion.png",
    bladeSvg: "/tracks/Mask group-2.svg",
    illustration: "/tracks/illustration_3.png",
    left: "34.5%",
    width: "17.81%",
    titlePos: { left: "49.8%", top: "13%" },
    titleWidth: "36%",
    hoverX: -4,
    hoverY: -15,
    titleAspect: "136/118",

    // Mobile properties
    mobileBlade: "/tracks mobile/Mask group-2.png",
    mobileTitle: "/tracks mobile/03\u2028Healthcare Companion.png",
    mobileTitlePos: { left: "72%", top: "20%" },
    mobileTitleWidth: "24%",
    mobileTitleAspect: "67/57",
    mobileHoverX: 14,
    mobileHoverY: -2,
    mobileHeight: "17.88%",
    mobileAlign: "bottom",
  },
  {
    id: 4,
    title: "Travel & Exploration",
    titleImg: "/tracks/04\u2028 Travel & Exploration.png",
    bladeSvg: "/tracks/Mask group-3.svg",
    illustration: "/tracks/illustration_4.png",
    left: "49.5%",
    width: "17.46%",
    titlePos: { left: "57%", top: "13%" },
    titleWidth: "36%",
    hoverX: 4,
    hoverY: -15,
    titleAspect: "142/118",

    // Mobile properties
    mobileBlade: "/tracks mobile/Mask group-3.png",
    mobileTitle: "/tracks mobile/04\u2028 Travel & Exploration.png",
    mobileTitlePos: { left: "72%", top: "55%" },
    mobileTitleWidth: "25%",
    mobileTitleAspect: "70/57",
    mobileHoverX: 14,
    mobileHoverY: 2,
    mobileHeight: "17.45%",
    mobileAlign: "top",
  },
  {
    id: 5,
    title: "Finance",
    titleImg: "/tracks/05_Finance.svg",
    bladeSvg: "/tracks/Mask group-4.svg",
    illustration: "/tracks/illustration_5.png",
    left: "49.5%",
    width: "31.15%",
    titlePos: { left: "72%", top: "15%" },
    titleWidth: "16%",
    hoverX: 10,
    hoverY: -13,
    titleAspect: "93/75",

    // Mobile properties
    mobileBlade: "/tracks mobile/Mask group-4.png",
    mobileTitle: "/tracks mobile/05\u2028Finance.png",
    mobileTitlePos: { left: "75%", top: "65%" },
    mobileTitleWidth: "18%",
    mobileTitleAspect: "46/36",
    mobileHoverX: 12,
    mobileHoverY: 5,
    mobileHeight: "31.18%",
    mobileAlign: "top",
  },
  {
    id: 6,
    title: "Social Impact Platform",
    titleImg: "/tracks/06\u2028Social Impact Platform.png",
    bladeSvg: "/tracks/Mask group-5.svg",
    illustration: "/tracks/illustration_6.png",
    left: "49.5%",
    width: "50.0%",
    titlePos: { left: "74%", top: "16%" },
    titleWidth: "17%",
    hoverX: 15,
    hoverY: -8,
    titleAspect: "157/113",

    // Mobile properties
    mobileBlade: "/tracks mobile/Mask group-5.png",
    mobileTitle: "/tracks mobile/06\u2028Social Impact Platform.png",
    mobileTitlePos: { left: "74%", top: "75%" },
    mobileTitleWidth: "22%",
    mobileTitleAspect: "52/72",
    mobileHoverX: 10,
    mobileHoverY: 8,
    mobileHeight: "50.07%",
    mobileAlign: "top",
  },
];

export default function TracksSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileHoveredIdx, setMobileHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col items-center pt-0 pb-2 px-4 md:px-8 select-none overflow-hidden">
      {/* Mobile/Tablet Fan Layout (< lg) */}
      <div className="lg:hidden flex flex-col items-center justify-center w-full px-8 py-4 relative select-none">
        {/* Fan blades wrapper with locked aspect ratio */}
        <div className="relative w-full aspect-[298/699] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-auto">
          {/* Background Polygon */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/tracks mobile/Polygon 8.png"
              alt=""
              fill
              priority
              draggable={false}
              className="object-contain pointer-events-none"
            />
          </div>

          {/* Mobile Fan Blades */}
          {tracks.map((track, i) => {
            const isHovered = mobileHoveredIdx === i;
            const isAnyHovered = mobileHoveredIdx !== null;

            return (
              <motion.div
                key={track.id}
                onMouseEnter={() => setMobileHoveredIdx(i)}
                onMouseLeave={() => setMobileHoveredIdx(null)}
                style={{
                  left: 0,
                  width: "100%",
                  height: track.mobileHeight,
                  zIndex: isHovered ? 30 : (i === 0 || i === 5 ? 11 : i === 1 || i === 4 ? 12 : 13),
                  ...(track.mobileAlign === "bottom" ? { bottom: "50%" } : { top: "50%" })
                }}
                animate={{
                  x: isHovered ? track.mobileHoverX : 0,
                  y: isHovered ? track.mobileHoverY : 0,
                  scale: isHovered ? 1.03 : 1,
                  opacity: isAnyHovered && !isHovered ? 0.65 : 1,
                  filter: isAnyHovered && !isHovered ? "brightness(0.85)" : "brightness(1)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
                className="absolute origin-left cursor-pointer select-none"
              >
                {/* Slanted Blade Background */}
                <div className="relative w-full h-full">
                  <Image
                    src={track.mobileBlade}
                    alt=""
                    fill
                    priority
                    draggable={false}
                    className="object-contain pointer-events-none"
                  />

                  {/* Title overlay */}
                  <div
                    className="absolute"
                    style={{
                      left: track.mobileTitlePos.left,
                      top: track.mobileTitlePos.top,
                      width: track.mobileTitleWidth,
                      aspectRatio: track.mobileTitleAspect,
                    }}
                  >
                    <Image
                      src={track.mobileTitle}
                      alt={track.title}
                      fill
                      priority
                      className="object-contain pointer-events-none"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Left Side: Brain and vertical wings */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[50%] flex flex-col items-center gap-4 z-20 select-none pointer-events-none w-[200px]">
            {/* Top Wing */}
            <div className="relative w-[170px] aspect-[192/248]">
              <Image
                src="/tracks mobile/image 16.png"
                alt=""
                fill
                priority
                draggable={false}
                className="object-contain pointer-events-none"
              />
            </div>

            {/* Brain */}
            <div className="relative w-[110px] aspect-[88/137] -my-2">
              <Image
                src="/tracks mobile/Brain.png"
                alt="Brain"
                fill
                priority
                draggable={false}
                className="object-contain pointer-events-none"
              />
            </div>

            {/* Bottom Wing */}
            <div className="relative w-[110px] aspect-[118/187]">
              <Image
                src="/tracks mobile/image 15.png"
                alt=""
                fill
                priority
                draggable={false}
                className="object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Fan Layout (>= lg) */}
      <div className="hidden lg:flex flex-col items-center justify-center w-full max-w-[1050px] mt-8">
        {/* Fan blades wrapper with locked aspect ratio */}
        <div className="relative w-full aspect-[1432/611] max-h-[447px]">
          {tracks.map((track, i) => {
            const isHovered = hoveredIdx === i;
            const isAnyHovered = hoveredIdx !== null;

            return (
              <motion.div
                key={track.id}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  left: track.left,
                  width: track.width,
                  zIndex: isHovered ? 30 : (i === 0 || i === 5 ? 11 : i === 1 || i === 4 ? 12 : 13),
                }}
                animate={{
                  x: isHovered ? track.hoverX : 0,
                  y: isHovered ? track.hoverY : 0,
                  scale: isHovered ? 1.03 : 1,
                  opacity: isAnyHovered && !isHovered ? 0.65 : 1,
                  filter: isAnyHovered && !isHovered ? "brightness(0.85) blur(0px)" : "brightness(1) blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
                className="absolute bottom-0 h-[101%] origin-bottom cursor-pointer select-none"
              >
                {/* Slanted Blade SVG Background & Embedded Illustration */}
                <div className="relative w-full h-full">
                  <Image
                    src={track.bladeSvg}
                    alt=""
                    fill
                    priority
                    draggable={false}
                    className="object-contain pointer-events-none"
                  />

                  {/* Title Image overlay */}
                  <div
                    style={{
                      left: track.titlePos.left,
                      top: track.titlePos.top,
                      width: track.titleWidth,
                      aspectRatio: track.titleAspect,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
                  >
                    <Image
                      src={track.titleImg}
                      alt={track.title}
                      fill
                      draggable={false}
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* White brain scribble and side illustrations at the bottom convergence point */}
        <div className="flex items-center justify-center gap-6 -mt-2 z-20 select-none pointer-events-none">
          {/* Left Illustration */}
          <div className="relative w-[180px] aspect-[508/451]">
            <Image
              src="/tracks/image 16.png"
              alt=""
              fill
              priority
              draggable={false}
              className="object-contain"
            />
          </div>

          {/* Brain Scribble */}
          <div className="relative w-[226px] h-[154px]">
            <Image
              src="/tracks/Brain.svg"
              alt="Brain Scribble"
              fill
              priority
              draggable={false}
              className="object-contain"
            />
          </div>

          {/* Right Illustration */}
          <div className="relative w-[180px] aspect-[382/258]">
            <Image
              src="/tracks/image 15.png"
              alt=""
              fill
              priority
              draggable={false}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
