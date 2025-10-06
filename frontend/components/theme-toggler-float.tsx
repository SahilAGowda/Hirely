"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function FloatingThemeToggler() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatedThemeToggler
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-2xl border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
        duration={500}
      />
    </div>
  );
}
