import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
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
  title: "Diki Armanda | Fullstack Developer & Lecturer",
  description:
    "Portofolio Mokhamad Diki Armanda — Fullstack Developer, Lecturer, dan pengembang web.",
  keywords: [
    "Diki Armanda",
    "Fullstack Developer",
    "Portofolio",
    "Software Engineer",
    "Lecturer",
  ],
  authors: [{ name: "Mokhamad Diki Armanda" }],
  openGraph: {
    title: "Diki Armanda | Portofolio",
    description: "Fullstack Developer & Lecturer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
