import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ahamad Rafi MP | MERN Stack Developer",
  description:
    "Portfolio of Ahamad Rafi MP — MERN Stack Developer specializing in React, Next.js, Node.js, microservices, and cloud deployment.",
  keywords: [
    "MERN Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Full Stack Developer",
    "Kerala",
  ],
  authors: [{ name: "Ahamad Rafi MP" }],
  openGraph: {
    title: "Ahamad Rafi MP | MERN Stack Developer",
    description:
      "Building scalable web applications with React, Next.js, and Node.js.",
    type: "website",
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
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-background text-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
