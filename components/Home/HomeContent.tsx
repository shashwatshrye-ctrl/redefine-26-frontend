"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import SiteHeader from "@/components/Navigation/SiteHeader";
import FAQSection from "@/components/Home/FAQSection";
import Timeline from "@/components/Timeline/timeline";
import TracksSection from "@/components/Tracks/TracksSection";
import TeamUpFlow from "@/components/TeamUp/TeamUpFlow";
import TeamSection from "@/components/Team/TeamSection";
import type { Team } from "@/lib/teamup";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

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
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll to team section after formation
  useEffect(() => {
    if (formedTeam) {
      const el = document.getElementById("team");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [formedTeam]);

  return (
    <main className="relative flex w-full flex-col items-stretch overflow-x-hidden bg-black font-sans text-white">
      <SiteHeader />

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        <motion.div variants={sectionVariants} custom={0}>
          <Timeline />
        </motion.div>
        <motion.div variants={sectionVariants} custom={1}>
          <TracksSection />
        </motion.div>
        <motion.div variants={sectionVariants} custom={2}>
          {formedTeam ? (
            <TeamSection teamName={formedTeam.name} />
          ) : (
            <TeamUpFlow onTeamFormed={handleTeamFormed} />
          )}
        </motion.div>
        <motion.div variants={sectionVariants} custom={3}>
          <FAQSection />
        </motion.div>
      </motion.div>

      <footer className="w-full border-t border-white/10 bg-black py-8 text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} Redefine &mdash; IEEE CS VIT
      </footer>
    </main>
  );
}
