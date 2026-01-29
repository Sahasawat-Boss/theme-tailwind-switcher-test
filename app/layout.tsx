import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./style/globals.css";
import DarkModeSwitcher from "@/Components2/DarkModeSwitcher";
import ThemeSwitcher2 from "@/Components2/ThemeSwitcher2";

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
        <div className="fixed top-5 right-5 flex items-center justify-center gap-4 z-50">
          {/* สลับสีพื้นหลัง */}
          <DarkModeSwitcher />

          {/* สลับสี Accent */}
          <ThemeSwitcher2 />
        </div>
        {children}
      </body>
    </html>
  );
}
