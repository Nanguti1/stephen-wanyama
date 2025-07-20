import type { Metadata } from "next";
import { Orbitron, Exo, Sora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "@/components/navigation";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stephen Wanyama | EACC Investigator",
  description:
    "Portfolio of Stephen Wanyama, Ethics and Anti-Corruption Commission Investigator specializing in public sector integrity and anti-corruption initiatives.",
  keywords: [
    "EACC",
    "Anti-Corruption",
    "Ethics",
    "Investigation",
    "Public Sector",
    "Kenya",
  ],
  authors: [{ name: "Stephen Wanyama" }],
  openGraph: {
    title: "Stephen Wanyama | EACC Investigator",
    description:
      "Portfolio of Stephen Wanyama, Ethics and Anti-Corruption Commission Investigator",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${exo.variable} ${sora.variable} antialiased min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}
      >
        <Providers>
          <Navigation />
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
