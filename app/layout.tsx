import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Geist,
  IBM_Plex_Mono,
  Manrope,
  Unbounded,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Splitz Interactive faces, used only inside the games pages.
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

import { person } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjul-sharma.com"),
  title: `${person.name} — ${person.role}`,
  description: person.tagline,
  openGraph: {
    title: `${person.name} — ${person.role}`,
    description: person.tagline,
    url: "https://sanjul-sharma.com",
    siteName: person.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description: person.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${geistSans.variable} ${plexMono.variable} ${unbounded.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Set the theme before first paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var t=s||(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
