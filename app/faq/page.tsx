import type { Metadata } from "next";
import SectionPage from "@/components/Layout/SectionPage";
import FAQSection from "@/components/Home/FAQSection";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FAQPage() {
  return (
    <SectionPage>
      <FAQSection />
    </SectionPage>
  );
}