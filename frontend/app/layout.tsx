import type { Metadata } from "next";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import "./globals.css";
import { FloatingThemeToggler } from "@/components/theme-toggler-float";





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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Theme init error:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingThemeToggler />
      </body>
    </html>
  );
}
