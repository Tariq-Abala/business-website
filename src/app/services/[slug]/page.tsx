import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Shield,
  Briefcase,
  Users2,
  Clock,
  Sparkles,
} from "lucide-react";
import { SERVICES, FIRM_INFO, CASE_STUDIES } from "@/data/consulting";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Pratique non trouvée | Atlas Advisory Group" };
  }
  return {
    title: `${service.title} | Atlas Advisory Group`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find other services for related links
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <div className="bg-[#FAFAF9] text-[#1C1917]">
      {/* 1. Header with breadcrumbs */}
      <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l&apos;ensemble des expertises</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/80">
              {service.badge}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-emerald-900 font-medium">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Photo hero */}
              <div className="relative rounded-3xl overflow-hidden shadow-sm border border-stone-200 aspect-[16/9]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>

              {/* In-depth narrative */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 space-y-6">
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Démarche &amp; Philosophie d&apos;Intervention
                </h2>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {service.fullDesc}
                </p>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
                  <strong className="text-stone-900 block font-semibold mb-1">
                    Profil de nos mandants pour ce domaine :
                  </strong>
                  <span>{service.clientProfile}</span>
                </div>
              </div>

              {/* Challenges Addressed */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Problématiques Clés Traitées
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Nos consultants interviennent dès lors que ces signaux d&apos;alerte ou besoins de structuration se manifestent au sein du comité exécutif :
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {service.keyChallenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1"
                    >
                      <div className="flex items-center gap-2 text-stone-800 font-semibold text-xs">
                        <AlertCircle className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                        <span>Enjeu {idx + 1}</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contractual Deliverables */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Livrables &amp; Travaux Contractuels
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Chaque étape de la mission donne lieu à des documents formels présentés et remis aux parties prenantes :
                </p>

                <div className="space-y-3 pt-2">
                  {service.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#FAFAF9] border border-stone-200 flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-stone-900 block">
                          {deliv}
                        </span>
                        <span className="text-[11px] text-stone-500">
                          Document revu et validé en comité de pilotage avec les associés.
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Consultation Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#1C3D2B] text-white space-y-5 sticky top-28 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-900 text-emerald-300 border border-emerald-700">
                  Mandat Confidentiel
                </span>

                <h3 className="font-serif text-xl font-bold leading-snug">
                  Échanger avec l&apos;associé responsable de cette pratique
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed">
                  Planifiez une première session d&apos;orientation confidentielle sous accord de non-divulgation (NDA).
                </p>

                <div className="space-y-2 pt-2 border-t border-emerald-800/80 text-xs text-stone-300">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>Confidentialité bilatérale garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Réponse sous 24h ouvrées</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?service=${service.slug}`}
                    className="w-full py-3 rounded-xl bg-white text-stone-900 font-bold text-xs uppercase tracking-wider hover:bg-stone-100 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Solliciter un entretien</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Other practices menu */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  Autres Pôles de Compétence
                </h4>
                <div className="space-y-2">
                  {otherServices.map((other) => (
                    <Link
                      key={other.id}
                      href={`/services/${other.slug}`}
                      className="p-3 rounded-xl border border-stone-100 hover:border-stone-300 hover:bg-stone-50 transition-all flex items-center justify-between group block"
                    >
                      <div>
                        <span className="text-xs font-semibold text-stone-900 group-hover:text-[#1C3D2B] transition-colors block">
                          {other.title}
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {other.badge}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
