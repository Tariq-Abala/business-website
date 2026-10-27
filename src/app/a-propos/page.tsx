import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Shield,
  Building2,
  Users2,
  Scale,
  Award,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Phone,
  FileCheck2,
} from "lucide-react";
import { FIRM_INFO, TEAM_MEMBERS } from "@/data/consulting";

export const metadata: Metadata = {
  title: "Le Cabinet & Les Associés | Atlas Advisory Group",
  description:
    "Découvrez l'histoire, la gouvernance indépendante et l'équipe dirigeante d'Atlas Advisory Group à Casablanca Finance City et Paris.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      {/* 1. Page Header */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Gouvernance &amp; Indépendance</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Une pratique de conseil de direction résolument indépendante.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Fondé pour apporter aux décideurs économiques régionaux les standards d&apos;excellence des grands cabinets internationaux, avec une implication directe et continue de nos associés.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Photo & Narrative Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
                Notre Genèse
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
                Bâtir des stratégies actionnables, pas des rapports théoriques.
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Les dirigeants d&apos;entreprises de taille intermédiaire font face à des mutations majeures : transition digitale accélérée, tensions sur les chaînes d&apos;approvisionnement, transmission de capital et internationalisation vers les marchés d&apos;Afrique de l&apos;Ouest.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Atlas Advisory a été créé avec une conviction fondamentale : les recommandations stratégiques ne prennent leur pleine valeur que si elles sont ancrées dans la réalité des opérations de terrain et portées par des professionnels aguerris.
              </p>

              <div className="pt-2 border-t border-stone-200 space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1C3D2B] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                    ✓
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-semibold">100% de capital détenu par les associés :</strong>
                    <span className="text-stone-600">Aucune dépendance financière envers des banques d&apos;affaires ou des fonds d&apos;investissement.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1C3D2B] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                    ✓
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-semibold">Culture de la discrétion absolue :</strong>
                    <span className="text-stone-600">Tous nos collaborateurs sont soumis à des clauses de non-divulgation renforcées (NDA).</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3]">
                <Image
                  src="/images/modern_architecture.jpg"
                  alt="Tour Casablanca Finance City"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team / Partners Showcase */}
      <section className="py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
              Gouvernance de Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Des associés engagés en première ligne
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Chez Atlas Advisory, les associés ne se contentent pas de signer les propositions commerciales : ils pilotent personnellement chaque phase d&apos;analyse et d&apos;atelier stratégique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="p-8 rounded-3xl bg-[#FAFAF9] border border-stone-200 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-stone-200 bg-stone-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl font-bold text-stone-900">
                        {member.name}
                      </h3>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        Profil Démo
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-2 border-t border-stone-200 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                      Repères Professionnels :
                    </span>
                    <ul className="space-y-1 text-xs text-stone-600">
                      {member.credentials.map((cred, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1C3D2B]" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-500 flex items-center gap-3">
            <FileCheck2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              Les biographies ci-dessus sont des profils de démonstration représentatifs des profils seniors intervenant sur nos mandats d&apos;ingénierie et de conseil.
            </span>
          </div>
        </div>
      </section>

      {/* 4. Offices & Locations */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
              Implantation Géographique
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Casablanca &amp; Paris
            </h2>
            <p className="text-sm text-stone-600">
              Un ancrage stratégique à Casablanca Finance City pour rayonner au Maghreb et en Afrique, et un bureau à Paris pour le lien avec les investisseurs européens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Siège Régional — Casablanca
                </span>
                <span className="text-xs text-stone-500">Maroc</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Tour Casablanca Finance City (CFC)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                16ème étage, Main Street, Casa Anfa, 20250 Casablanca. Accès direct aux institutions financières et aux instances de régulation.
              </p>
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="text-stone-500">{FIRM_INFO.hours}</span>
                <Link
                  href="/contact"
                  className="font-bold text-[#1C3D2B] hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  <span>Prendre rendez-vous</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider">
                  Bureau de Liaison — Paris
                </span>
                <span className="text-xs text-stone-500">France</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Avenue de l&apos;Opéra
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                28, Avenue de l&apos;Opéra, 75001 Paris. Interface avec les fonds d&apos;investissement européens, banques d&apos;affaires et directions M&amp;A.
              </p>
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="text-stone-500">Sur rendez-vous préalable</span>
                <Link
                  href="/contact"
                  className="font-bold text-[#1C3D2B] hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  <span>Prendre rendez-vous</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Bar */}
      <section className="py-16 bg-[#1C3D2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold max-w-2xl mx-auto">
            Prêt à aborder vos prochains arbitrages avec nos associés ?
          </h2>
          <p className="text-sm text-stone-300 max-w-xl mx-auto">
            Tous nos premiers échanges sont systématiquement protégés par un accord de non-divulgation bilatéral (NDA).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white text-stone-900 font-bold text-xs uppercase tracking-wider hover:bg-stone-100 transition-colors shadow-sm"
            >
              Demander un entretien avec un associé
            </Link>
            <Link
              href="/diagnostic"
              className="px-6 py-3.5 rounded-xl border border-white/30 text-white font-medium text-xs hover:bg-white/10 transition-colors"
            >
              Faire le diagnostic interactif (3 min)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
