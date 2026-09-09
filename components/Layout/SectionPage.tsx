"use client";

import type { ReactNode } from "react";
import SiteHeader from "@/components/Navigation/SiteHeader";

export default function SectionPage({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex w-full flex-col items-stretch overflow-x-hidden bg-black font-sans text-white">
      <SiteHeader />
      {children}
      <footer className="w-full border-t border-white/10 bg-black py-8 text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} Redefine &mdash; IEEE CS VIT
      </footer>
    </main>
  );
}