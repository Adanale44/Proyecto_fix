"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow">
      <Link href="/" className="text-xl font-bold flex items-center gap-2">
        🏆 Fixturem
      </Link>

      <div className="flex items-center gap-6">
        <Link href="#features" className="hover:text-blue-600">
          Características
        </Link>
        <Link href="#about" className="hover:text-blue-600">
          Acerca de
        </Link>
        <Link
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          href="/auth"
        >
          Empezar
        </Link>
      </div>
    </nav>
  );
}
