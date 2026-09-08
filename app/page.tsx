import Head from "@/components/Navigation/head";
import TracksSection from "@/components/Tracks/TracksSection";
import TeamSection from "@/components/Team/TeamSection";
import TeamUp from "@/components/TeamUp/teamup";
import Build from "@/components/TeamUp/buildteam";
export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-none bg-black text-white relative overflow-x-hidden flex flex-col items-stretch font-sans px-0 mx-0">
      <Head activeTab="tracks" />
      <div className="flex-1 flex flex-col items-stretch justify-start w-full max-w-none px-0 mx-0 -mt-2 md:-mt-6 lg:-mt-10">
        <TracksSection />
        <TeamSection />
        <TeamUp />
        <Build />
      </div>
    </main>
  );
}
