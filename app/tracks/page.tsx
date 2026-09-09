import type { Metadata } from "next";
import SectionPage from "@/components/Layout/SectionPage";
import TracksSection from "@/components/Tracks/TracksSection";

export const metadata: Metadata = {
  title: "Tracks",
};

export default function TracksPage() {
  return (
    <SectionPage>
      <TracksSection />
    </SectionPage>
  );
}