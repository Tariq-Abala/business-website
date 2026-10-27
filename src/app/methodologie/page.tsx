import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Shield,
  Clock,
  CheckCircle2,
  Calendar,
  FileCheck2,
  Users2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { METHODOLOGY_STEPS } from "@/data/consulting";

export const metadata: Metadata = {
  title: "Méthodologie & Processus d'Intervention | Atlas Advisory Group",
  description:
    "Découvrez les 4 étapes structurées de nos missions de conseil en stratégie, du cadrage initial jusqu'au pilotage de l'exécution.",
};

export default function MethodologyPage() {
  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      {/* 1. Page Header */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Rigueur &amp; Gouvernance de Projet</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Une démarche éprouvée, du diagnostic à l&apos;impact mesuré.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Pour chaque mandat, nous appliquons un protocole d&apos;ingénierie rigoureux qui concilie profondeur d&apos;analyse, adhésion des équipes dirigeantes et respect strict des échéances.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Steps Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-xs flex flex-col md:flex-row gap-8 items-start relative group hover:border-[#1C3D2B]/40 transition-colors"
            >
              {/* Step indicator */}
              <div className="flex md:flex-col items-center gap-4 shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#1C3D2B] text-white flex items-center justify-center font-serif text-2xl font-black shadow-sm">
                  {step.step}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                  {step.duration}
                </span>
              </div>

              {/* Step Details */}
              <div className="space-y-4 flex-1">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400 block mb-1">
                    Phase {idx + 1}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#1C3D2B] transition-colors">
                    {step.name}
                  </h2>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-stone-900 uppercase tracking-wider text-[11px]">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Livrables Formels de Fin d&apos;Étape :</span>
                  </div>
                  <p className="text-stone-600 pl-5">
                    {step.deliverables}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Governance Charter */}
      <section className="py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
              Gouvernance de Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Notre Charte d&apos;Engagement Réciproque
            </h2>
            <p className="text-sm text-stone-600">
              Les principes non négociables qui encadrent toutes les interactions entre nos équipes et vos comités de direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Implication Directe des Associés
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Le Partner en charge anime personnellement les comités stratégiques bimensuels et garantit la qualité finale de chaque recommandation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Confidentialité &amp; Cloisonnement (NDA)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Toutes les données sensibles sont hébergées sur des espaces sécurisés chiffrés et détruites ou restituées à l&apos;issue du mandat selon votre choix.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAF9] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Transparence Budgétaire Totale
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nos propositions d&apos;intervention détaillent les forfaits, le calendrier d&apos;avancement et les éventuels honoraires de succès sans surcoût imprévu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 bg-[#FAFAF9] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Vous souhaitez cadrer les modalités d&apos;une future mission ?
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mx-auto">
            Nous élaborons sous 5 jours ouvrés une note méthodologique sur-mesure décrivant le découpage en phases adapté à votre organisation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1C3D2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#152e20] transition-colors shadow-sm"
            >
              <span>Demander une note de cadrage méthodologique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
