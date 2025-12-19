import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Md Hasib Talukder | Frontend Engineer",
    template: "%s | Md Hasib Talukder"
  },
  description: "Frontend Engineer specializing in Next.js, React, and Micro-Frontend architecture. Building high-quality, scalable web applications.",
  keywords: [
    "Hasib Muhammad",
    "Md Hasib Talukder",
    "Frontend Engineer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer Portfolio",
    "Micro-Frontend",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript Developer",
    "Web Developer Bangladesh"
  ],
  authors: [{ name: "Md Hasib Talukder" }],
  creator: "Md Hasib Talukder",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hasibmuhammad.vercel.app", // Placeholder, user should update if different
    title: "Md Hasib Talukder | Frontend Engineer",
    description: "Frontend Engineer specializing in Next.js, React, and Micro-Frontend architecture.",
    siteName: "Md Hasib Talukder Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Hasib Talukder | Frontend Engineer",
    description: "Frontend Engineer specializing in Next.js, React, and Micro-Frontend architecture.",
    creator: "@hasibmuhammaad",
  },
  icons: {
    icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧑‍💻</text></svg>`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
