import type { Metadata } from "next";
import { Lexend_Deca, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  display: "swap",
});

const veneer = localFont({
  src: "./fonts/Veneer.ttf",
  variable: "--font-veneer",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iHub at UCLA Hillel | Bridging Campus Life with the Start-Up Nation",
  description: "The Israel Innovation & Entrepreneurship Hub (IHub) at Hillel at UCLA connecting students with the Israeli high-tech and start-up culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexendDeca.variable} ${veneer.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
        <Script
          src="https://widgets.givebutter.com/latest.umd.cjs?acct=HA0Mt2Iv8aiAyRog&p=other"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
