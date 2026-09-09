"use client";

import { useState, useCallback, useEffect } from "react";
import SplitBackground from "@/components/Background/SplitBackground";
import Navbar from "@/components/Navigation/Navbar";
import RegisterButton from "@/components/Navigation/RegisterButton";
import SideMenu from "@/components/Navigation/SideMenu";
import SiteHeader from "@/components/Navigation/SiteHeader";
import FAQSection from "@/components/Home/FAQSection";
import Timeline from "@/components/Timeline/timeline";
import TracksSection from "@/components/Tracks/TracksSection";
import TeamUpFlow from "@/components/TeamUp/TeamUpFlow";
import TeamSection from "@/components/Team/TeamSection";
import type { Team } from "@/lib/teamup";

export default function HomePage() {
  const [formedTeam, setFormedTeam] = useState<Team | null>(null);

  const handleTeamFormed = useCallback((team: Team) => {
    setFormedTeam(team);
  }, []);

  useEffect(() => {
    if (formedTeam) {
      const el = document.getElementById("team");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [formedTeam]);

  return (
    <main className="relative flex w-full flex-col items-stretch overflow-x-hidden bg-black font-sans text-white">
      {/* Hero: full-screen cover (matches commit 946aafb) */}
      <section className="relative h-screen w-screen overflow-hidden">
        <SplitBackground />
        <RegisterButton />
        <Navbar />
        <SideMenu />
      </section>

      {/* Sticky header for the content flow below the hero */}
      <SiteHeader />

      {/* Content sections flowing downward */}
      <Timeline />
      <TracksSection />
      {formedTeam ? (
        <TeamSection teamName={formedTeam.name} />
      ) : (
        <TeamUpFlow onTeamFormed={handleTeamFormed} />
      )}
      <FAQSection />

      <footer className="w-full border-t border-white/10 bg-black py-8 text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} Redefine &mdash; IEEE CS VIT
      </footer>
    </main>
  );
}
