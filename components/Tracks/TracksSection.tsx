"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
  titleAspect: string;

  // Mobile layout properties — only the bits that genuinely depend on the
  // hand-placed illustration/art asset stay here. Height, hover offset,
  // z-index and top/bottom alignment are all *derived* below instead of
  // being duplicated per-track numbers.
  mobileBlade: string;
  mobileTitle: string;
  mobileTitlePos: { left: string; top: string };
  mobileTitleWidth: string;
  mobileTitleAspect: string;
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
    titleAspect: "149/75",

    mobileBlade: "/tracks mobile/Mask group.png",
    mobileTitle: "/tracks mobile/01\u2028E-Commerce.png",
    mobileTitlePos: { left: "70%", top: "18%" },
    mobileTitleWidth: "25%",
    mobileTitleAspect: "73/36",
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
    titleAspect: "119/113",

    mobileBlade: "/tracks mobile/Mask group-1.png",
    mobileTitle: "/tracks mobile/02\u2028Smart Education.png",
    mobileTitlePos: { left: "72%", top: "22%" },
    mobileTitleWidth: "22%",
    mobileTitleAspect: "58/54",
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
    titleAspect: "136/118",

    mobileBlade: "/tracks mobile/Mask group-2.png",
    mobileTitle: "/tracks mobile/03\u2028Healthcare Companion.png",
    mobileTitlePos: { left: "72%", top: "20%" },
    mobileTitleWidth: "24%",
    mobileTitleAspect: "67/57",
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
    titleAspect: "142/118",

    mobileBlade: "/tracks mobile/Mask group-3.png",
    mobileTitle: "/tracks mobile/04\u2028 Travel & Exploration.png",
    mobileTitlePos: { left: "72%", top: "55%" },
    mobileTitleWidth: "25%",
    mobileTitleAspect: "70/57",
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
    titleAspect: "93/75",

    mobileBlade: "/tracks mobile/Mask group-4.png",
    mobileTitle: "/tracks mobile/05\u2028Finance.png",
    mobileTitlePos: { left: "75%", top: "65%" },
    mobileTitleWidth: "18%",
    mobileTitleAspect: "46/36",
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
    titleAspect: "157/113",

    mobileBlade: "/tracks mobile/Mask group-5.png",
    mobileTitle: "/tracks mobile/06\u2028Social Impact Platform.png",
    mobileTitlePos: { left: "74%", top: "75%" },
    mobileTitleWidth: "22%",
    mobileTitleAspect: "52/72",
  },
];

/**
 * --- Dynamic fan-geometry helpers ---
 * These replace what used to be a hand-typed hoverX / hoverY / zIndex /
 * mobileHeight / mobileAlign value on every single track. Everything here
 * is computed from (index, total) so the fan re-balances itself if a
 * track is added, removed or reordered — nothing is hardcoded per item.
 */

// Blades stack highest in the middle of the fan, symmetrically.
function getZIndex(i: number, total: number) {
  return 11 + Math.min(i, total - 1 - i);
}

// Desktop: blades fan out left→right on hover, bulging upward at the
// midpoint (matches the original -15..+15 / -8..-15..-8 curve).
function getDesktopHover(i: number, total: number) {
  const t = total > 1 ? i / (total - 1) : 0;
  return {
    x: Math.round(-15 + 30 * t),
    y: Math.round(-8 - 7 * Math.sin(Math.PI * t)),
  };
}

// Mobile: blades fan out top→bottom on hover, bulging rightward at the
// midpoint (matches the original 10..14..10 / -8..8 curve).
function getMobileHover(i: number, total: number) {
  const t = total > 1 ? i / (total - 1) : 0;
  return {
    x: Math.round(10 + 4 * Math.sin(Math.PI * t)),
    y: Math.round(-8 + 16 * t),
  };
}

// First half of the fan reads its title from the bottom of the blade,
// second half from the top — derived from position, not stored per item.
function getMobileAlign(i: number, total: number): "bottom" | "top" {
  return i < total / 2 ? "bottom" : "top";
}

export default function TracksSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileHoveredIdx, setMobileHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col items-center pt-0 pb-2 select-none overflow-hidden">
      {/* Mobile/Tablet Fan Layout (< lg) */}
      <div className="lg:hidden flex flex-col items-center justify-center w-full py-4 relative select-none">
        {/* Fan blades wrapper with locked aspect ratio, scales smoothly across breakpoints */}
        <div className="relative w-full aspect-[298/699] max-w-[260px] sm:max-w-[300px] md:max-w-[360px] h-auto">
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
            const hover = getMobileHover(i, tracks.length);
            const align = getMobileAlign(i, tracks.length);
            const stripOnly = track.id === 1 || track.id === 6;

            return (
              <motion.div
                key={track.id}
                onMouseEnter={() => setMobileHoveredIdx(i)}
                onTouchStart={() => setMobileHoveredIdx(i)}
                onMouseLeave={() => setMobileHoveredIdx(null)}
                onTouchEnd={() => setMobileHoveredIdx(null)}
                style={{
                  left: 0,
                  width: "100%",
                  // same wedge proportion used on desktop, reused for
                  // mobile height instead of a second hardcoded number
                  height: track.width,
                  zIndex: getZIndex(i, tracks.length),
                  ...(align === "bottom" ? { bottom: "50%" } : { top: "50%" }),
                }}
                animate={{
                  x: isHovered ? hover.x : 0,
                  y: isHovered ? hover.y : 0,
                  scale: stripOnly ? 1 : (isHovered ? 1.03 : 1),
                  opacity: isAnyHovered && !isHovered ? 0.65 : 1,
                  filter: isAnyHovered && !isHovered ? "brightness(0.85)" : "brightness(1)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="absolute origin-left cursor-pointer select-none"
              >
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: stripOnly && isHovered ? 1.03 : 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  >
                    <Image
                      src={track.mobileBlade}
                      alt=""
                      fill
                      priority
                      draggable={false}
                      className="object-contain pointer-events-none"
                    />
                  </motion.div>

                  {/* Title overlay — font size follows the blade image scale,
                      so it's responsive without a separate breakpoint value */}
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

          {/* Left Side: Brain and vertical wings — sizes scale with breakpoint
              instead of one fixed px value */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4 z-20 select-none pointer-events-none w-[160px] sm:w-[180px] md:w-[200px]">
            <div className="relative w-[140px] sm:w-[155px] md:w-[170px] aspect-[192/248]">
              <Image
                src="/tracks mobile/image 16.png"
                alt=""
                fill
                priority
                draggable={false}
                className="object-contain pointer-events-none"
              />
            </div>

            <div className="relative w-[90px] sm:w-[100px] md:w-[110px] aspect-[88/137] -my-2">
              <Image
                src="/tracks mobile/Brain.png"
                alt="Brain"
                fill
                priority
                draggable={false}
                className="object-contain pointer-events-none"
              />
            </div>

            <div className="relative w-[90px] sm:w-[100px] md:w-[110px] aspect-[118/187]">
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
      <div className="hidden lg:flex flex-col items-center justify-center w-[min(95vw,1450px)] max-w-[1450px]">
        <div className="relative w-full aspect-[1432/611] max-h-[620px]">
          {tracks.map((track, i) => {
            const isHovered = hoveredIdx === i;
            const isAnyHovered = hoveredIdx !== null;
            const hover = getDesktopHover(i, tracks.length);
            const stripOnly = track.id === 1 || track.id === 6;

            return (
              <motion.div
                key={track.id}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  left: track.left,
                  width: track.width,
                  zIndex: getZIndex(i, tracks.length),
                }}
                animate={{
                  x: isHovered ? hover.x : 0,
                  y: isHovered ? hover.y : 0,
                  scale: stripOnly ? 1 : (isHovered ? 1.03 : 1),
                  opacity: isAnyHovered && !isHovered ? 0.65 : 1,
                  filter: isAnyHovered && !isHovered ? "brightness(0.85) blur(0px)" : "brightness(1) blur(0px)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="absolute bottom-0 h-[101%] origin-bottom cursor-pointer select-none"
              >
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: stripOnly && isHovered ? 1.03 : 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  >
                    <Image
                      src={track.bladeSvg}
                      alt=""
                      fill
                      priority
                      draggable={false}
                      className="object-contain pointer-events-none"
                    />
                  </motion.div>

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

        <div className="flex items-center justify-center gap-8 -mt-2 z-20 select-none pointer-events-none">
          <div className="relative w-[240px] aspect-[508/451]">
            <Image src="/tracks/image 16.png" alt="" fill priority draggable={false} className="object-contain" />
          </div>

          <div className="relative w-[300px] h-[205px]">
            <Image src="/tracks/Brain.svg" alt="Brain Scribble" fill priority draggable={false} className="object-contain" />
          </div>

          <div className="relative w-[240px] aspect-[382/258]">
            <Image src="/tracks/image 15.png" alt="" fill priority draggable={false} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}