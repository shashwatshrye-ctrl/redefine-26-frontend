import Head from "@/components/Navigation/head";
import TracksSection from "@/components/Tracks/TracksSection";
import TeamSection from "@/components/Team/TeamSection";
import TeamUp from "@/components/TeamUp/teamup";
export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-black text-white relative overflow-x-hidden flex flex-col items-center font-sans">
      <Head activeTab="tracks" />
      <div className="flex-1 flex flex-col items-center justify-center w-full -mt-2 md:-mt-6 lg:-mt-10">
        <TracksSection />
      </div>
      <TeamSection />
      <TeamUp/>
    </main>
  );
}
