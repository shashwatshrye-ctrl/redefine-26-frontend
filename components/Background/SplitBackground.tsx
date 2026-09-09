import Image from "next/image";
import NoiseOverlay from "./NoiseOverlay";

export default function SplitBackground() {
  return (
    <section className="relative h-full w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/redefine-2026/Homepage.svg"
          alt="Background"
          fill
          priority
          className="object-cover select-none"
          style={{ willChange: "transform" }}
        />
      </div>

      <NoiseOverlay />

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="relative mx-auto w-full max-w-[1480px]">
          <Image
            src="/redefine-2026/Homepage (4).svg"
            alt="Homepage"
            width={1480}
            height={1024}
            priority
            className="w-full h-auto object-bottom"
            style={{ willChange: "transform" }}
          />
        </div>
      </div>

      {/* REDEFINE + REIMAGINE text group */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex justify-center">
        <div className="relative h-[120vh] w-[70vw] max-w-[1000px]">
          {/* REDEFINE Group (behind human) */}
          <div className="pointer-events-none absolute left-1/2 top-[22%] -translate-x-1/2 z-10">
            <div className="relative h-[100px] w-[500px] sm:h-[130px] sm:w-[650px]">
              {/* Filled shadow */}
              <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] sm:translate-x-[4px] sm:translate-y-[4px]">
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
