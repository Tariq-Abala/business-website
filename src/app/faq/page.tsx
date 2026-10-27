"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  HelpCircle,
  Shield,
  CreditCard,
  Briefcase,
  Users2,
  ArrowRight,
  Search,
} from "lucide-react";
import { FAQ_ITEMS } from "@/data/consulting";

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 0: true });

  const categories = [
    { id: "all", label: "Toutes les questions" },
    { id: "mandats", label: "Déroulement des Mandats" },
    { id: "confidentialite", label: "Confidentialité & NDA" },
    { id: "honoraires", label: "Honoraires & Modèle" },
    { id: "equipe", label: "Équipe & Gouvernance" },
  ];

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      {/* 1. Header */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Transparence &amp; Déontologie</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Questions Fréquentes des Dirigeants &amp; Actionnaires
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Retrouvez l&apos;ensemble des éclairages sur notre modèle de rémunération, nos engagements de discrétion et nos conditions d&apos;intervention.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Search & Category Filters */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher par mot-clé (ex: NDA, honoraires, durée, associés)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] bg-[#FAFAF9]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === c.id
                    ? "bg-[#1C3D2B] text-white shadow-xs"
                    : "bg-[#FAFAF9] text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ Accordion Items */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const isOpen = !!openItems[idx];
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-stone-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 transition-transform shrink-0 ${
                        isOpen ? "rotate-180 text-[#1C3D2B]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 p-8 rounded-3xl bg-white border border-stone-200 text-stone-500 text-xs">
              Aucune question ne correspond à votre recherche.
            </div>
          )}
        </div>
      </section>

      {/* 4. Still have a question? */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Une question spécifique à votre secteur d&apos;activité ?
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mx-auto">
            Nos associés sont à votre entière disposition pour un échange d&apos;orientation téléphonique confidentiel de 30 minutes.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1C3D2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#152e20] transition-colors shadow-sm"
            >
              <span>Joindre le secrétariat des associés</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
