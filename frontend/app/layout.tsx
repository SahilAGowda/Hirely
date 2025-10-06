import type { Metadata } from "next";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import "./globals.css";





export const metadata: Metadata = {
  title: "Hirely",
  description: "AI - Powered Job Application Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
