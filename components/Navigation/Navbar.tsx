import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-6 sm:py-8 md:px-10 md:py-10">
      <Image
        src="/redefine-2026/redefine.jpeg"
        alt="Redefine"
        width={100}
        height={100}
        unoptimized
        className="h-[clamp(2.25rem,7vw,5rem)] w-auto object-contain"
        priority
      />
    </header>
  );
}
