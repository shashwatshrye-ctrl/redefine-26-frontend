"use client";

import SplitBackground from "@/components/Background/SplitBackground";
import Navbar from "@/components/Navigation/Navbar";
import RegisterButton from "@/components/Navigation/RegisterButton";
import SideMenu from "@/components/Navigation/SideMenu";

export default function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black font-sans text-white">
      <SplitBackground />
      <RegisterButton />
      <Navbar />
      <SideMenu />
    </main>
  );
}
