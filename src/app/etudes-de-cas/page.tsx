"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCheck2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { CASE_STUDIES } from "@/data/consulting";

export default function CaseStudiesPage() {
  const [selectedSector, setSelectedSector] = useState<string>("all");

  const sectors = [
    { id: "all", label: "Toutes les interventions" },
    { id: "Industrie Agroalimentaire", label: "Agroalimentaire" },
    { id: "Transport & Supply Chain", label: "Supply Chain & Logistique" },
    { id: "Technologies Financières (FinTech)", label: "FinTech & M&A" },
  ];

  const filteredCases =
    selectedSector === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.sector === selectedSector);

  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      {/* 1. Header */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wider uppercase">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
              <span>Démonstrations Illustratives Fictives</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Études de Cas &amp; Modélisations Méthodologiques
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Pour des motifs stricts de secret des affaires et d&apos;accords NDA signés avec nos mandants, les exemples ci-dessous sont des simulations pédagogiques illustrant notre démarche opérationnelle.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Transparency Disclaimer */}
      <section className="py-6 bg-stone-100/80 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-2xl bg-white border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <FileCheck2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block font-semibold">
                Engagement Déontologique &amp; Absence de Promesse de Résultat :
              </strong>
              <span>
                Ces études de cas ne citent aucun client réel et ne garantissent aucun rendement financier systématique. Chaque mission de conseil comporte des spécificités propres aux marchés et aux organisations.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filter tabs & Cases */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Sector Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-semibold mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Secteur :</span>
            </div>
            {sectors.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedSector(s.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedSector === s.id
                    ? "bg-[#1C3D2B] text-white shadow-xs"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          <div className="space-y-12">
            {filteredCases.map((c) => (
              <div
                key={c.id}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-8 hover:border-[#1C3D2B]/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
                      {c.sector}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                      Simulation Pédagogique
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Durée de la mission : {c.duration}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                    {c.title}
                  </h2>
                  <p className="text-sm font-semibold text-emerald-800">
                    {c.tagline}
                  </p>
                </div>

                {/* Metrics Simulation Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#FAFAF9] border border-stone-200">
                  {c.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="text-center sm:text-left space-y-1">
                      <span className="text-[11px] text-stone-500 uppercase tracking-wider block">
                        {metric.label}
                      </span>
                      <span className="font-serif text-3xl font-bold text-[#1C3D2B] block">
                        {metric.value}
                      </span>
                      <span className="text-[10px] text-stone-400 block italic">
                        Simulation modèle
                      </span>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                  <div className="space-y-2 p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
                    <strong className="text-xs font-bold uppercase tracking-wider text-stone-800 block">
                      Contexte Initial &amp; Enjeu Critique
                    </strong>
                    <p className="text-stone-600 leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>

                  <div className="space-y-2 p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200/60">
                    <strong className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">
                      Intervention &amp; Démarche Déployée
                    </strong>
                    <p className="text-stone-700 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1.5">
                      Livrables Clés Remis au Commanditaire :
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {c.deliverables.map((deliv, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-stone-100 text-stone-700 flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                          <span>{deliv}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(
                      `Échange sur cas similaire : ${c.sector}`
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1C3D2B] hover:bg-[#152e20] text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
                  >
                    <span>Échanger sur un contexte similaire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
