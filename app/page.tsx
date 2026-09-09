import Head from "@/components/Navigation/head";
import TracksSection from "@/components/Tracks/TracksSection";
import TeamSection from "@/components/Team/TeamSection";
import TeamUp from "@/components/TeamUp/teamup";
import Build from "@/components/TeamUp/buildteam";
import Teamcode from "@/components/TeamUp/teamcode";
import Timeline from "@/components/Timeline/timeline";
export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-none bg-black text-white relative overflow-x-hidden flex flex-col items-stretch font-sans px-0 mx-0">
      <Head />
      <div className="flex-1 flex flex-col items-stretch justify-start w-full max-w-none px-0 mx-0">
        <TracksSection />
        <TeamSection />
        <TeamUp />
        <Build />
        <Teamcode />
        <Timeline />
      </div>
    </main>
  );
}
