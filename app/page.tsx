import type { Metadata } from "next";
import HomePage from "@/components/Home/HomePage";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <HomePage />;
}
