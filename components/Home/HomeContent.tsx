"use client";

import { useState, useCallback, useEffect } from "react";
import SiteHeader from "@/components/Navigation/SiteHeader";
import FAQSection from "@/components/Home/FAQSection";
import Timeline from "@/components/Timeline/timeline";
import TracksSection from "@/components/Tracks/TracksSection";
import TeamUpFlow from "@/components/TeamUp/TeamUpFlow";
import TeamSection from "@/components/Team/TeamSection";
import type { Team } from "@/lib/teamup";

export default function HomeContent() {
  const [formedTeam, setFormedTeam] = useState<Team | null>(null);

  const handleTeamFormed = useCallback((team: Team) => {
    setFormedTeam(team);
  }, []);

  // Scroll to hash section after page transition
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll to team section after formation
  useEffect(() => {
    if (formedTeam) {
      const el = document.getElementById("team");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [formedTeam]);

  return (
    <main className="relative flex w-full flex-col items-stretch overflow-x-hidden bg-black font-sans text-white">
      <SiteHeader />

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
