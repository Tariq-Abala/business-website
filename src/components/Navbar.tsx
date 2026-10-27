"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  Briefcase,
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { FIRM_INFO, SERVICES } from "@/data/consulting";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Expertises", href: "/services", hasDropdown: true },
    { label: "Le Cabinet", href: "/a-propos" },
    { label: "Méthodologie", href: "/methodologie" },
    { label: "Études de Cas", href: "/etudes-de-cas" },
    { label: "Diagnostic", href: "/diagnostic" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Corporate Assurance Bar */}
      <div className="bg-[#121E18] text-stone-300 text-[11px] py-1.5 px-4 hidden sm:block border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Tour Casablanca Finance City (CFC) • Bureaux Casablanca &amp; Paris</span>
            </span>
            <span className="text-stone-600 hidden md:inline">•</span>
            <span className="text-stone-300 hidden md:inline">
              100% des échanges couverts par accord de confidentialité (NDA)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${FIRM_INFO.phoneRaw}`}
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-emerald-400"
            >
              <Phone className="w-3 h-3" />
              <span>{FIRM_INFO.phone}</span>
            </a>
            <span className="text-stone-600">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Secrétariat des Associés
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full border-b transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-stone-200 shadow-xs py-3"
            : "bg-white border-stone-200 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo matching Greenfield executive style */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#1C3D2B] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform tracking-wider">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-stone-900 leading-none">
                ATLAS ADVISORY
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-700 font-semibold mt-1">
                Management Consulting • Casablanca
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-stone-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 transition-colors py-1 ${
                        isActive ? "text-[#1C3D2B] font-bold" : "hover:text-[#1C3D2B]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
                    </Link>

                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white rounded-2xl border border-stone-200 p-2 shadow-xl space-y-1 animate-in fade-in zoom-in-95">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="block p-2.5 rounded-xl hover:bg-stone-50 transition-colors group"
                            >
                              <div className="font-bold text-xs text-stone-900 group-hover:text-emerald-700 flex items-center justify-between">
                                <span>{s.title}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-emerald-700" />
                              </div>
                              <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                                {s.badge}
                              </p>
                            </Link>
                          ))}
                          <div className="pt-2 border-t border-stone-100 px-2.5 pb-1">
                            <Link
                              href="/services"
                              className="text-[11px] font-bold text-emerald-700 hover:underline flex items-center gap-1"
                            >
                              <span>Voir l&apos;ensemble des expertises</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive ? "text-[#1C3D2B] font-bold border-b-2 border-[#1C3D2B]" : "hover:text-[#1C3D2B]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Button matching Greenfield executive aesthetic */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/diagnostic"
              className="text-xs font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl transition-colors"
            >
              Diagnostic Flash
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-[#1C3D2B] hover:bg-[#152e20] text-white text-xs font-bold tracking-tight shadow-sm transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <span>Demander un Entretien</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-full bg-[#1C3D2B] text-white text-xs font-bold text-center"
              >
                Demander un Entretien Confidentiel
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
