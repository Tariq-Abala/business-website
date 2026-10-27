"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Briefcase,
  TrendingUp,
  Cpu,
  Factory,
  CheckCircle2,
  Lock,
  Building2,
  Calendar,
  Sparkles,
  HelpCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Scale,
  Award,
} from "lucide-react";
import {
  FIRM_INFO,
  SERVICES,
  METHODOLOGY_STEPS,
  CASE_STUDIES,
  TEAM_MEMBERS,
  FAQ_ITEMS,
} from "@/data/consulting";
import DiagnosticTool from "@/components/DiagnosticTool";

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "strategie",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = "Veuillez renseigner votre nom complet.";
    if (!formData.company.trim()) errors.company = "Veuillez préciser le nom de votre organisation.";
    if (!formData.email.trim() || !formData.email.includes("@"))
      errors.email = "Une adresse email professionnelle valide est requise.";
    if (!formData.message.trim())
      errors.message = "Veuillez décrire brièvement l'objet de votre démarche.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
  };

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "strategie":
        return <TrendingUp className="w-5 h-5 text-emerald-800" />;
      case "finance":
        return <Scale className="w-5 h-5 text-emerald-800" />;
      case "digital":
        return <Cpu className="w-5 h-5 text-emerald-800" />;
      case "operations":
        return <Factory className="w-5 h-5 text-emerald-800" />;
      default:
        return <Briefcase className="w-5 h-5 text-emerald-800" />;
    }
  };

  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      {/* 1. HERO SECTION (Greenfield Inspired) */}
      <section className="pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Conseil de Direction Générale &amp; M&amp;A</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-stone-900 leading-[1.12]">
                La stratégie qui propulse les entreprises d&apos;envergure.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                Atlas Advisory accompagne les comités de direction, conseils d&apos;administration et actionnaires d&apos;ETI dans leurs arbitrages critiques. Rigueur d&apos;analyse, solutions éprouvées et résultats quantifiables.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-[#1C3D2B] hover:bg-[#152e20] text-white font-medium text-sm transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2 group"
                >
                  <span>Demander un Échange Confidentiel</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/etudes-de-cas"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-medium text-sm transition-colors border border-stone-300 shadow-xs inline-flex items-center gap-2"
                >
                  <span>Consulter nos Études de Cas</span>
                </Link>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-stone-200 grid grid-cols-3 gap-4 text-xs text-stone-600">
                <div>
                  <strong className="block text-stone-900 font-semibold">100% Accord NDA</strong>
                  <span className="text-[11px] text-stone-500">Confidentialité bilatérale stricte</span>
                </div>
                <div>
                  <strong className="block text-stone-900 font-semibold">Associés Dédiés</strong>
                  <span className="text-[11px] text-stone-500">Implication continue des partners</span>
                </div>
                <div>
                  <strong className="block text-stone-900 font-semibold">Casablanca &amp; Paris</strong>
                  <span className="text-[11px] text-stone-500">Tour CFC &amp; Avenue de l&apos;Opéra</span>
                </div>
              </div>
            </div>

            {/* Right Photo (Rounded Executive Office Architecture) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 aspect-[4/3] group">
                <Image
                  src="/images/office_hero.jpg"
                  alt="Bureaux exécutifs Atlas Advisory à Casablanca Finance City"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/80 text-xs shadow-sm flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-stone-900 block">
                      Tour Casablanca Finance City (CFC)
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      Pôle régional d&apos;expertise financière et stratégique
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase tracking-wider">
                    Siège Régional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION WHAT WE DO / DOMAINES D'EXPERTISE */}
      <section className="py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
              Nos Domaines d&apos;Intervention
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Une expertise ciblée pour des enjeux complexes
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Nous faisons équipe avec les comités de direction pour résoudre les défis les plus déterminants — de l&apos;orientation stratégique jusqu&apos;à l&apos;exécution sur le terrain.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="p-8 rounded-3xl bg-[#FAFAF9] border border-stone-200/90 hover:border-[#1C3D2B]/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shadow-xs">
                      {getServiceIcon(s.slug)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                      {s.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#1C3D2B] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800 mt-1">
                      {s.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {s.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-stone-200/80 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                      Livrables Clés :
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {s.deliverables.slice(0, 3).map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 italic">
                    Pour : {s.clientProfile}
                  </span>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-xs font-bold text-[#1C3D2B] hover:text-emerald-800 inline-flex items-center gap-1.5 group/link"
                  >
                    <span>Détail de l&apos;offre</span>
                    <ArrowRight className="w-3.5 h-3.5 group-link-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
            >
              <span>Comparer l&apos;ensemble de nos pratiques &amp; mandats</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SECTION ABOUT THE FIRM & VALUES */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo Grid */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3]">
                <Image
                  src="/images/corporate_meeting.jpg"
                  alt="Séance de travail stratégique avec le comité de direction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#1C3D2B] shrink-0 font-bold">
                  NDA
                </div>
                <div>
                  <strong className="text-xs font-bold text-stone-900 block">
                    Indépendance &amp; Absence de Conflit d&apos;Intérêts
                  </strong>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Atlas Advisory est détenu à 100% par ses associés en exercice, garantissant une impartialité absolue.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
                Le Cabinet &amp; Notre Positionnement
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-snug">
                Une alternative agile aux cabinets anglo-saxons pour le tissu économique régional.
              </h2>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Fondé par d&apos;anciens directeurs associés de grands cabinets de conseil en stratégie, Atlas Advisory conjugue l&apos;excellence analytique internationale avec une compréhension intime des réalités opérationnelles, réglementaires et actionnariales locales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-4 rounded-xl bg-white border border-stone-200/90 space-y-1">
                  <span className="font-serif text-2xl font-bold text-[#1C3D2B]">100%</span>
                  <span className="text-xs font-semibold text-stone-900 block">Engagement des Associés</span>
                  <p className="text-[11px] text-stone-500">
                    Chaque mission est directement pilotée sur le terrain par un Partner, sans délégation à des consultants inexpérimentés.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200/90 space-y-1">
                  <span className="font-serif text-2xl font-bold text-[#1C3D2B]">Double Ancrage</span>
                  <span className="text-xs font-semibold text-stone-900 block">Casablanca &amp; Paris</span>
                  <p className="text-[11px] text-stone-500">
                    Accès direct aux investisseurs européens et accompagnement de l&apos;expansion vers les marchés d&apos;Afrique de l&apos;Ouest.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1C3D2B] hover:text-emerald-800 group"
                >
                  <span>En savoir plus sur la gouvernance et les associés</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION PROVEN METHODOLOGY */}
      <section className="py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
              Notre Démarche
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Une méthodologie structurée en 4 étapes
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Chaque mandat suit un protocole rigoureux garantissant la clarté des livrables et la mesure objective des avancées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((m) => (
              <div
                key={m.step}
                className="p-6 rounded-2xl bg-[#FAFAF9] border border-stone-200 flex flex-col justify-between hover:border-[#1C3D2B]/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-black text-[#1C3D2B]/80">
                      {m.step}
                    </span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-white text-stone-600 border border-stone-200">
                      {m.duration}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-stone-900">
                    {m.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200/70 text-[11px]">
                  <strong className="text-stone-800 block mb-0.5">Livrables :</strong>
                  <span className="text-stone-500">{m.deliverables}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/methodologie"
              className="text-xs font-bold text-[#1C3D2B] hover:text-emerald-800 inline-flex items-center gap-1.5"
            >
              <span>Découvrir notre charte d&apos;engagement et gouvernance de projet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE DIAGNOSTIC SECTION */}
      <section id="diagnostic" className="py-20 bg-[#FAFAF9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
              Évaluation Gratuite en Ligne
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Mesurez la maturité de vos priorités stratégiques
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Un questionnaire interactif en 4 questions pour identifier vos leviers d&apos;accélération et estimer le cadre de mission adapté.
            </p>
          </div>

          {/* Embedded Diagnostic Component */}
          <DiagnosticTool />
        </div>
      </section>

      {/* 6. CASE STUDIES (CLEARLY LABELED DEMONSTRATIONS) */}
      <section className="py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                Démonstrations Illustratives Fictives
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
                Études de Cas &amp; Démarches Concrètes
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
                Ces exemples modélisent des typologies d&apos;interventions récurrentes menées auprès de PME et ETI. Ils illustrent notre méthodologie et ne constituent pas un engagement contractuel de gain financier.
              </p>
            </div>

            <Link
              href="/etudes-de-cas"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1C3D2B] hover:text-emerald-800 shrink-0"
            >
              <span>Voir toutes les études de cas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((c) => (
              <div
                key={c.id}
                className="p-6 rounded-3xl bg-[#FAFAF9] border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                      {c.sector}
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium">
                      Durée : {c.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#1C3D2B] transition-colors leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 italic">
                      {c.tagline}
                    </p>
                  </div>

                  {/* Impact metrics simulation */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-200/80 bg-white rounded-xl px-3">
                    {c.impactMetrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="font-serif text-base font-bold text-[#1C3D2B] block">
                          {m.value}
                        </span>
                        <span className="text-[9px] text-stone-500 leading-tight block">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5 text-xs text-stone-600">
                    <strong className="text-stone-800 block text-[11px] uppercase tracking-wider">
                      Défi Traité :
                    </strong>
                    <p className="text-[11px] leading-relaxed text-stone-600 line-clamp-3">
                      {c.challenge}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200/80 flex items-center justify-between">
                  <span className="text-[10px] text-amber-800 font-medium bg-amber-50 px-2 py-0.5 rounded">
                    Exemple de simulation
                  </span>
                  <Link
                    href="/etudes-de-cas"
                    className="text-xs font-bold text-[#1C3D2B] hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    <span>Consulter</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
              Transparence &amp; Déontologie
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Questions Fréquentes des Directions Générales
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Modalités d&apos;intervention, confidentialité bilatérale et honoraires de mission.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-stone-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 transition-transform shrink-0 ${
                        isOpen ? "rotate-180 text-[#1C3D2B]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-xs font-bold text-[#1C3D2B] hover:text-emerald-800 inline-flex items-center gap-1"
            >
              <span>Consulter l&apos;intégralité des réponses déontologiques (FAQ)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONTACT FORM SECTION (PREMIUM CORPORATE FORM WITH VALIDATION) */}
      <section id="contact" className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Secretariat Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                <span>Secretariat Général des Associés</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-snug">
                Initier un échange stratégique sous accord NDA
              </h2>

              <p className="text-sm text-stone-600 leading-relaxed">
                Les associés d&apos;Atlas Advisory reçoivent les dirigeants pour une première session de cadrage confidentielle de 45 minutes, sans engagement.
              </p>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#1C3D2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-stone-500 uppercase block font-semibold">
                      Secrétariat des Associés
                    </span>
                    <a
                      href={`tel:${FIRM_INFO.phoneRaw}`}
                      className="font-semibold text-stone-900 hover:text-emerald-800 text-sm"
                    >
                      {FIRM_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#1C3D2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-stone-500 uppercase block font-semibold">
                      Courriel Professionnel
                    </span>
                    <a
                      href={`mailto:${FIRM_INFO.email}`}
                      className="font-semibold text-stone-900 hover:text-emerald-800 text-sm"
                    >
                      {FIRM_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#1C3D2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-stone-500 uppercase block font-semibold">
                      Siège Régional CFC
                    </span>
                    <span className="text-xs text-stone-600 block">
                      {FIRM_INFO.addressCasa}, {FIRM_INFO.cityCasa}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action for instant mobile testing */}
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-emerald-900 block">
                    Canal Direct WhatsApp Direction
                  </span>
                  <span className="text-[11px] text-emerald-700">
                    Contact direct et réactif avec l&apos;équipe associée
                  </span>
                </div>
                <a
                  href={`https://wa.me/${FIRM_INFO.whatsappRaw}?text=${encodeURIComponent(
                    "Bonjour Atlas Advisory, je sollicite un échange préliminaire confidentiel."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#1C3D2B] text-white text-xs font-semibold hover:bg-[#152e20] transition-colors shrink-0 inline-flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Contact & Consultation Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAF9] border border-stone-200 shadow-xs">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      Demande enregistrée en mode simulation
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                      Merci pour votre intérêt, <strong className="text-stone-800">{formData.fullName}</strong>. Votre demande pour la structure <strong className="text-stone-800">{formData.company}</strong> a été validée localement.
                    </p>
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 max-w-md mx-auto text-left">
                      <strong>Note d&apos;Intégration Backend :</strong>
                      <p className="text-[11px] mt-1 text-amber-800">
                        Ce formulaire s&apos;exécute en mode démonstration sans serveur distant actif. Pour joindre un véritable interlocuteur ou échanger directement, veuillez utiliser la ligne WhatsApp ci-contre.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-white transition-colors"
                    >
                      Soumettre une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="border-b border-stone-200 pb-4">
                      <h3 className="font-serif text-xl font-bold text-stone-900">
                        Formulaire de Consultation Stratégique
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        Les informations renseignées sont strictement confidentielles.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Nom &amp; Prénom *
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: Tariq Abala"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                          }
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] bg-white ${
                            formErrors.fullName
                              ? "border-red-400 focus:border-red-500"
                              : "border-stone-300 focus:border-[#1C3D2B]"
                          }`}
                        />
                        {formErrors.fullName && (
                          <span className="text-[11px] text-red-600 mt-1 block">
                            {formErrors.fullName}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Entreprise ou Organisation *
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: Atlas Holding S.A."
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, company: e.target.value }))
                          }
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] bg-white ${
                            formErrors.company
                              ? "border-red-400 focus:border-red-500"
                              : "border-stone-300 focus:border-[#1C3D2B]"
                          }`}
                        />
                        {formErrors.company && (
                          <span className="text-[11px] text-red-600 mt-1 block">
                            {formErrors.company}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Courriel Professionnel *
                        </label>
                        <input
                          type="email"
                          placeholder="direction@votre-entreprise.ma"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] bg-white ${
                            formErrors.email
                              ? "border-red-400 focus:border-red-500"
                              : "border-stone-300 focus:border-[#1C3D2B]"
                          }`}
                        />
                        {formErrors.email && (
                          <span className="text-[11px] text-red-600 mt-1 block">
                            {formErrors.email}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Numéro Téléphonique Direct
                        </label>
                        <input
                          type="tel"
                          placeholder="+212 6 XX XX XX XX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] focus:border-[#1C3D2B] bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Domaine d&apos;Intervention Souhaité
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, service: e.target.value }))
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] focus:border-[#1C3D2B] bg-white"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Objet &amp; Contexte de votre Démarche *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Précisez succinctement l'enjeu : revue stratégique, projet d'acquisition, réorganisation des processus, etc."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-[#1C3D2B] bg-white ${
                          formErrors.message
                            ? "border-red-400 focus:border-red-500"
                            : "border-stone-300 focus:border-[#1C3D2B]"
                        }`}
                      />
                      {formErrors.message && (
                        <span className="text-[11px] text-red-600 mt-1 block">
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-[#1C3D2B] hover:bg-[#152e20] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                      >
                        <span>Transmettre la Demande Confidentielle</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
