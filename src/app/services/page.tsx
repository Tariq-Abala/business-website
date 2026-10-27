import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ArrowRight,
  TrendingUp,
  Scale,
  Cpu,
  Factory,
  CheckCircle2,
  AlertCircle,
  Shield,
  Sliders,
  ChevronRight,
} from "lucide-react";
import { SERVICES } from "@/data/consulting";

export const metadata: Metadata = {
  title: "Pratiques & Expertises | Atlas Advisory Group",
  description:
    "Découvrez nos 4 pôles d'expertise : Conseil en Stratégie, Corporate Finance & M&A, Transformation Digitale et Performance Opérationnelle.",
};

export default function ServicesOverviewPage() {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "strategie":
        return <TrendingUp className="w-6 h-6 text-emerald-800" />;
      case "finance":
        return <Scale className="w-6 h-6 text-emerald-800" />;
      case "digital":
        return <Cpu className="w-6 h-6 text-emerald-800" />;
      case "operations":
        return <Factory className="w-6 h-6 text-emerald-800" />;
      default:
        return <TrendingUp className="w-6 h-6 text-emerald-800" />;
    }
  };

  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      {/* 1. Page Header */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>4 Pôles d&apos;Intervention</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Des expertises complémentaires pour chaque cycle de l&apos;entreprise.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              De l&apos;arbitrage actionnarial jusqu&apos;à l&apos;intégration des technologies d&apos;entreprise, nos équipes apportent des réponses pragmatiques calibrées pour les PME et ETI.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Blocks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((s, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={s.id}
                id={s.slug}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-xs hover:border-[#1C3D2B]/40 transition-all scroll-mt-24"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Column */}
                  <div
                    className={`space-y-6 ${
                      isReversed ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center">
                        {getIcon(s.slug)}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/80">
                        {s.badge}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                        {s.title}
                      </h2>
                      <p className="text-sm font-semibold text-emerald-800 mt-1">
                        {s.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-stone-600 leading-relaxed">
                      {s.fullDesc}
                    </p>

                    {/* Challenges Solved */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                        Défis Fréquemment Rencontrés :
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                        {s.keyChallenges.map((c, i) => (
                          <div key={i} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                            <AlertCircle className="w-3.5 h-3.5 text-stone-500 mt-0.5 shrink-0" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                        Livrables Contractuels Remis :
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                        {s.deliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/services/${s.slug}`}
                        className="px-5 py-2.5 rounded-xl bg-[#1C3D2B] hover:bg-[#152e20] text-white text-xs font-bold transition-colors inline-flex items-center gap-2"
                      >
                        <span>Fiche Détaillée &amp; Démarche</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/contact?service=${s.slug}`}
                        className="px-5 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold transition-colors"
                      >
                        Solliciter une Note de Cadrage
                      </Link>
                    </div>
                  </div>

                  {/* Photo Column */}
                  <div
                    className={`${
                      isReversed ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"
                    }`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-md border border-stone-200 aspect-[4/3]">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md text-[11px] text-stone-700">
                        <strong>Public Cible :</strong> {s.clientProfile}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Pre-diagnostic teaser */}
      <section className="py-16 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAFAF9] border border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Aide à la Décision
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Vous hésitez sur le bon périmètre d&apos;intervention ?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Réalisez en 3 minutes notre diagnostic stratégique interactif. Il analyse vos priorités et vous oriente vers le pôle le plus pertinent.
              </p>
            </div>

            <Link
              href="/diagnostic"
              className="px-6 py-3.5 rounded-xl bg-[#1C3D2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#152e20] transition-colors shrink-0 inline-flex items-center gap-2"
            >
              <Sliders className="w-4 h-4" />
              <span>Lancer le Diagnostic</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
