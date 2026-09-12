"use client";

import { useCallback, useState } from "react";
import SectionPage from "@/components/Layout/SectionPage";
import TeamUpFlow from "@/components/TeamUp/TeamUpFlow";
import TeamSection from "@/components/Team/TeamSection";
import type { Team } from "@/lib/teamup";

export default function TeamUpPage() {
  const [formedTeam, setFormedTeam] = useState<Team | null>(null);

  const handleTeamFormed = useCallback((team: Team) => {
    setFormedTeam(team);
  }, []);

  const handleReset = useCallback(() => {
    setFormedTeam(null);
  }, []);

  return (
    <SectionPage>
      {formedTeam ? (
        <TeamSection teamName={formedTeam.name} onReset={handleReset} />
      ) : (
        <TeamUpFlow onTeamFormed={handleTeamFormed} />
      )}
    </SectionPage>
  );
}