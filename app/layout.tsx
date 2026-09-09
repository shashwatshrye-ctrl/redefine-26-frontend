import "./globals.css";
import type { Metadata } from "next";
import PageTransition from "@/components/Providers/PageTransition";

export const metadata: Metadata = {
  title: "Redefine",
  description: "Designathon Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
