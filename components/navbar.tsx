// components/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/ilanlar", label: "İlanlar" },
  { href: "/firmalar", label: "Firmalar" },
  { href: "/operatorler", label: "Operatörler" },
  { href: "/fiyatlandirma", label: "Fiyatlandırma" },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 text-sm font-black text-white shadow-sm">
            CN
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              CNCitem
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              FASON İŞ & CNC PLATFORMU
            </span>
          </div>
        </Link>

        {/* Linkler */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/70 px-2 py-1 text-xs text-slate-600 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1 transition ${
                  active
                    ? "bg-white text-sky-600 shadow-sm"
                    : "hover:bg-white hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Butonlar */}
        <div className="flex items-center gap-2">
          <button className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900 md:inline-flex">
            Giriş Yap
          </button>
          <button className="rounded-full bg-sky-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-600">
            Ücretsiz Kayıt Ol
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
