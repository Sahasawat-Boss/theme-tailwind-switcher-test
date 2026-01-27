import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./style/globals.css";
import ThemeSwitcher from "@/Components/ThemeSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Tailwind Theme",
  description: "Test Tailwind Theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="default">
      {/* default
        blue
        green
        black
        orange
        purple
        cyan
        pink */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Floating Switcher - วางไว้มุมขวาบน */}
        <div className="fixed top-5 right-5 z-50">
          <ThemeSwitcher />
        </div>
        {children}
      </body>
    </html>
  );
}
