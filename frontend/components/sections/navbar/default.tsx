"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2.5 shadow-2xl backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="mr-1 flex items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
            <span className="text-sm font-bold text-white">H</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-0.5 md:flex">
          <Link
            href="#features"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
          >
            FAQ
          </Link>
        </div>

        {/* Divider */}
        <div className="mx-1 h-5 w-px bg-white/10" />

        {/* Help Link */}
        <Link
          href="/help"
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
        >
          Help
        </Link>

        {/* CTA Button */}
        <Link
          href="/auth/signup"
          className="ml-1 rounded-full bg-[#1e3a5f] px-5 py-1.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-[#2d4a6f]"
        >
          Downloads
        </Link>
      </div>
    </nav>
  );
}
