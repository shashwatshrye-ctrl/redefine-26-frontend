"use client";

import Image from "next/image";

export default function DesktopBackgroundThreads() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block select-none opacity-35">
      {/* Main winding background thread (Top-Left across to Center-Right) */}
      <div className="absolute -top-[6%] -left-[6%] w-[90vw] h-[110vh]">
        <Image
          src="/threads/Vector 33.svg"
          alt=""
          fill
          priority
          unoptimized
          className="object-contain object-top-left opacity-45"
        />
      </div>

      {/* Top Right looping thread */}
      <div className="absolute -top-[12%] -right-[6%] w-[70vw] h-[100vh]">
        <Image
          src="/threads/Vector 34.svg"
          alt=""
          fill
          priority
          unoptimized
          className="object-contain object-top-right opacity-40"
        />
      </div>

      {/* Center-Right flowing thread */}
      <div className="absolute top-[12%] right-[1%] w-[48vw] h-[88vh]">
        <Image
          src="/threads/Vector 30.svg"
          alt=""
          fill
          priority
          unoptimized
          className="object-contain object-right opacity-35"
        />
      </div>
    </div>
  );
}
