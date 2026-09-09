import BuildTeam from "@/components/TeamUp/buildteam";
import Head from "@/components/Navigation/head";

export default function BuildTeamPage() {
  return (
    <main className="min-h-screen bg-black pt-24 md:pt-28 lg:pt-36">
      <Head activeTab="team-up" />
      <BuildTeam />
    </main>
  );
}
