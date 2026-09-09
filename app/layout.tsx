import "./globals.css";
import type { Metadata } from "next";
import PageTransition from "@/components/Providers/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Redefine 2026",
    template: "%s | Redefine 2026",
  },
  description:
    "A designathon by IEEE CS VIT — where ideas are redefined and reimagined.",
  applicationName: "Redefine",
  authors: [{ name: "IEEE CS VIT" }],
  keywords: [
    "Redefine",
    "Designathon",
    "IEEE CS VIT",
    "design",
    "hackathon",
    "reimagine",
  ],
  creator: "IEEE CS VIT",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Redefine 2026",
    description:
      "A designathon by IEEE CS VIT — where ideas are redefined and reimagined.",
    siteName: "Redefine",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Redefine 2026",
    description:
      "A designathon by IEEE CS VIT — where ideas are redefined and reimagined.",
  },
  category: "technology",
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