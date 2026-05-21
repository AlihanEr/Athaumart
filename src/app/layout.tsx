import type { Metadata } from "next";
import "./globals.css";
import ClientEffects from "@/components/ClientEffects";
import Intro from "@/components/Intro";
import Topbar from "@/components/Topbar";
import Rails from "@/components/Rails";

export const metadata: Metadata = {
  title: "Athaum — Illustrated Works, 2017–MMXXVI",
  description:
    "Selected illustrations by Athaum (アタウム). Character art, portrait studies, and painterly fanart.",
  metadataBase: new URL("https://athaum.art"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,0..100,0..1;1,9..144,300..900,0..100,0..1&family=Geist+Mono:wght@300..600&family=Geist:wght@300..700&family=Marcellus&family=Noto+Serif+JP:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Intro />
        <ClientEffects />
        <Topbar />
        <Rails />
        <div className="shell">{children}</div>
      </body>
    </html>
  );
}
