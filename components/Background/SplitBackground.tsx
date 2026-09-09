import Image from "next/image";
import NoiseOverlay from "./NoiseOverlay";

export default function SplitBackground() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/redefine-2026/Homepage.svg"
          alt="Background"
          fill
          priority
          className="object-cover select-none"
        />
      </div>

      <NoiseOverlay />

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-7 z-20 w-screen">
        <Image
          src="/redefine-2026/Homepage (4).svg"
          alt="Homepage"
          width={1920}
          height={980}
          priority
          className="w-screen h-screen object-bottom"
        />
      </div>

      {/* REDEFINE + REIMAGINE text group */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex justify-center">
        <div className="relative h-[120vh] w-[70vw]">
          {/* REDEFINE Group (behind human) */}
          <div className="pointer-events-none absolute left-1/2 top-[22%] -translate-x-1/2 z-10">
            <div className="relative h-[130px] w-[650px]">
              {/* Filled shadow */}
              <div className="absolute inset-0 translate-x-[4px] translate-y-[4px]">
                <Image
                  src="/redefine-2026/solid.svg"
                  alt=""
                  fill
                  priority
                  className="object-contain select-none"
                />
              </div>
              {/* Outline */}
              <div className="absolute inset-0">
                <Image
                  src="/redefine-2026/REDEFINE.svg"
                  alt="REDEFINE"
                  fill
                  priority
                  className="object-contain select-none"
                />
              </div>
            </div>
          </div>

          {/* Reimagine */}
          <div className="absolute left-[50%] top-[55%] z-[60] -translate-x-1/2">
            <Image
              src="/redefine-2026/image.png"
              alt="Reimagine"
              width={200}
              height={55}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
