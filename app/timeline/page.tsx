import type { Metadata } from "next";
import SectionPage from "@/components/Layout/SectionPage";
import Timeline from "@/components/Timeline/timeline";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function TimelinePage() {
  return (
    <SectionPage>
      <Timeline />
    </SectionPage>
  );
}