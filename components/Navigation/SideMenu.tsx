"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Letter = {
  src: string;
  alt: string;
  rotate?: number;
  y?: number;
  scale?: number;
};

type MenuItem = {
  id: string;
  className: string;
  letters: Letter[];
};

const menu: MenuItem[] = [
  {
    id: "timeline",
    className: "left-[10%] top-[47%]",
    letters: [
      { src: "/redefine-2026/T.svg", alt: "T", rotate: -6 },
      { src: "/redefine-2026/I.svg", alt: "I", rotate: 3, y: -5 },
      { src: "/redefine-2026/M.svg", alt: "M", rotate: -4, y: 2 },
      { src: "/redefine-2026/E.svg", alt: "E", rotate: 5, y: -1 },
      { src: "/redefine-2026/L.svg", alt: "L", rotate: -7, y: 3 },
      { src: "/redefine-2026/I.svg", alt: "I", rotate: 4, y: -2 },
      { src: "/redefine-2026/N.svg", alt: "N", rotate: -5, y: 1 },
      { src: "/redefine-2026/E.svg", alt: "E", rotate: 2, y: -4 },
    ],
  },
  {
    id: "faq",
    className: "left-[15%] bottom-[20%]",
    letters: [
      { src: "/redefine-2026/F.svg", alt: "F", rotate: -6 },
      { src: "/redefine-2026/A.svg", alt: "A", rotate: 5, y: -2 },
      { src: "/redefine-2026/Q.svg", alt: "Q", rotate: -8 },
    ],
  },
  {
    id: "tracks",
    className: "right-[15%] top-[42%]",
    letters: [
      { src: "/redefine-2026/T.svg", alt: "T", rotate: -5 },
      { src: "/redefine-2026/R.svg", alt: "R", rotate: 4 },
      { src: "/redefine-2026/A.svg", alt: "A", rotate: -3 },
      { src: "/redefine-2026/C.svg", alt: "C", rotate: 3 },
      { src: "/redefine-2026/K.svg", alt: "K", rotate: -7 },
      { src: "/redefine-2026/S.svg", alt: "S", rotate: 5 },
    ],
  },
  {
    id: "team-up",
    className: "right-[15%] bottom-[23%]",
    letters: [
      { src: "/redefine-2026/T.svg", alt: "T", rotate: -5 },
      { src: "/redefine-2026/E.svg", alt: "E", rotate: 4 },
      { src: "/redefine-2026/A.svg", alt: "A", rotate: -4 },
      { src: "/redefine-2026/M.svg", alt: "M", rotate: 5 },
      { src: "/redefine-2026/U.svg", alt: "U", rotate: -6 },
      { src: "/redefine-2026/P.svg", alt: "P", rotate: 7 },
    ],
  },
];

export default function SideMenu() {
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {menu.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => scroll(item.id)}
          className={`fixed z-40 hidden lg:flex ${item.className}`}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="flex items-end gap-[1px]">
            {item.letters.map((letter, i) => (
              <motion.div
                key={i}
                className="relative h-14 w-10"
                style={{
                  rotate: letter.rotate ?? 0,
                  y: letter.y ?? 0,
                }}
                whileHover={{
                  y: -6,
                  rotate: (letter.rotate ?? 0) + 8,
                  scale: 1.18,
                  transition: {
                    duration: 0.15,
                  },
                }}
              >
                <Image
                  src={letter.src}
                  alt={letter.alt}
                  fill
                  draggable={false}
                  className="
                    object-contain
                    select-none
                    drop-shadow-[0_4px_6px_rgba(0,0,0,0.45)]
                  "
                />
              </motion.div>
            ))}
          </div>
        </motion.button>
      ))}
    </>
  );
}
