import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamin Lee",
  description: "Crafting code from concept to launch.",
  metadataBase: new URL("https://hmart.app"),
  authors: [
    {
      name: "Hamin Lee",
      url: "https://twitter.com/hmartapp",
    },
  ],
  abstract: "Crafting code from concept to launch.",
  keywords: [
    "web development",
    "software engineering",
    "product design",
    "portfolio",
  ],
  robots: "index, follow",
  referrer: "origin",
  openGraph: {
    title: "Hamin Lee",
    siteName: "Hamin Lee",
    description: "Crafting code from concept to launch.",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://hmart.app/og.png",
        width: 1200,
        height: 630,
        alt: "Hamin Lee",
      },
    ],
  },
  twitter: {
    title: "Hamin Lee",
    creatorId: "@hmartapp",
    card: "summary_large_image",
    description: "Crafting code from concept to launch.",
    images: [
      {
        url: "https://hmart.app/og.png",
        width: 1200,
        height: 630,
        alt: "Hamin Lee",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
