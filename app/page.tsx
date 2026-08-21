import TimelineMap from "@/components/Timeline/TimelineMap";
import NoiseOverlay from "@/components/Background/NoiseOverlay";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <TimelineMap />
      <NoiseOverlay />
    </main>
  );
}

